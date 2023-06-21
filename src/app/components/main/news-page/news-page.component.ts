import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { News } from 'src/app/models/news.interface';
import { NewsService } from 'src/app/services/news.service';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import { ConvertDateService } from 'src/app/services/convert-date.service';

registerLocaleData(localeUk, 'uk-UA');

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  newsId: string = '';
  news!: News;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService,
    private convertDateService: ConvertDateService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(params => {
      this.newsId = params['id'];
      this.setNews();
    });
  }

  setNews(): void {
    this.newsService.getNewsById(this.newsId).pipe(take(1)).subscribe((res: News[]) => {
      if(res.length) {
        this.news = res[0];
      } else {
        this.news = JSON.parse(localStorage.getItem('news') as string);
      };
      this.news.date = this.convertDateService.getConvertedDate(this.news.date);
    });
  }

  backToAllNews(): void {
    this.router.navigate(['/news']);
  }
}
