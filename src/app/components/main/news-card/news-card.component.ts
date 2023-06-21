import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news.interface';
import { ConvertDateService } from 'src/app/services/convert-date.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() news!: News;

  constructor(
    private router: Router,
    private convertDateService: ConvertDateService
  ) {}

  goToNewsPage(): void {
    this.router.navigate(['/news', this.news.ID]);
  }

  getConvertedDate(): string {
    return this.convertDateService.getConvertedDate(this.news.date);
  }
}
