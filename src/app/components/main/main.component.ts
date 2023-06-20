import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.interface';
import { NewsService } from 'src/app/services/news.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  newsList: News[] = [];
  page = 0;
  limit = 3;

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.setNews();
  }

  setNews(): void {
    this.newsService.getNews(this.page, this.limit).pipe(take(1)).subscribe((res: News[]) => {
      this.newsList = res;
    })
  }
}
