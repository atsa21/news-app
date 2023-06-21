import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news.interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() news!: News;

  constructor(
    private router: Router
  ) {}

  goToNewsPage(): void {
    this.router.navigate(['/news', this.news.ID]);
  }
}
