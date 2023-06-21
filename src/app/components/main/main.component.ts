import { Component, OnInit } from '@angular/core';
import { News, NewsDto } from 'src/app/models/news.interface';
import { NewsService } from 'src/app/services/news.service';
import { take } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddNewsDialogComponent } from './add-news-dialog/add-news-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  newsList: News[] = [];
  lastNewsList: News[] = [];
  newsAmount = 0;
  page!: number;
  limit = 3;
  isNextPageExist = false;
  isNewNewsAdded = false;
  lastNewsId!: string;

  constructor(
    private newsService: NewsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.page = localStorage.getItem('page') ? Number(localStorage.getItem('page')) : 1;
    this.setNews();
  }

  checkLocalStore(): void {
    this.isNewNewsAdded = !!localStorage.getItem('news');
    if(this.isNewNewsAdded) {
      const newNews = JSON.parse(localStorage.getItem('news') as string);
      this.lastNewsList.unshift(newNews);
      this.lastNewsList.pop();
      this.newsList = this.lastNewsList;
    }
  }

  setNews(): void {
    this.newsService.getNews(this.page, this.limit).pipe(take(1)).subscribe((res: NewsDto) => {
      this.newsList = res.news;
      this.newsAmount = res.totalItems;
      this.checkNextPage();
      localStorage.setItem('page', this.page.toString());
      if(this.page === 1) {
        this.lastNewsId = this.newsList[0].ID;
        this.lastNewsList = res.news;
        this.checkLocalStore();
      }
    });
  }

  checkNextPage(): void {
    const newsGetted = this.page * this.limit;
    this.isNextPageExist = !(newsGetted >= this.newsAmount);
  }

  setNextNews(): void {
    this.page++;
    this.setNews();
  }

  setPrevNews(): void {
    if(this.page > 1) {
      this.page--;
      this.setNews();
    }
  }

  openAddNews(): void {
    const dialogRef = this.dialog.open(AddNewsDialogComponent, {
      panelClass: 'add-news-dialog'
    });
    this.setNewNews(dialogRef);
  }

  setNewNews(dialogRef: MatDialogRef<AddNewsDialogComponent>): void {
    dialogRef.afterClosed().pipe(take(1)).subscribe(res => {
      if(res) {
        const newId = Number(this.lastNewsId) - 1;
        const now = new Date().toString();
        const newNews: News = {
          ID: newId.toString(),
          title: res.title,
          description: res.description,
          date: now,
          link: '',
          isTop: false,
          commentsCount: 0,
          viewCount: 0,
          tags: []
        };
        localStorage.setItem('news', JSON.stringify(newNews));
        this.checkLocalStore();
        this.page = 1;
      }
    })
  }
}
