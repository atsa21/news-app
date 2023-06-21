import { Component, OnInit } from '@angular/core';
import { News, NewsDto } from 'src/app/models/news.interface';
import { NewsService } from 'src/app/services/news.service';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddNewsDialogComponent } from './add-news-dialog/add-news-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  newsList: News[] = [];
  newsAmount = 0;
  page = 1;
  limit = 3;
  isNextPageExist = false;

  constructor(
    private newsService: NewsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.setNews();
  }

  setNews(): void {
    this.newsService.getNews(this.page, this.limit).pipe(take(1)).subscribe((res: NewsDto) => {
      this.newsList = res.news;
      this.newsAmount = res.totalItems;
      this.checkNextPage();
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
  }
}
