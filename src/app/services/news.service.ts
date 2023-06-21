import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { News } from '../models/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNews(page: number, limit: number): Observable<News[]> {
    const params = {
      _page: page,
      _limit: limit
    };

    return this.http.get<News[]>(this.url, { params });
  }

  getNewsById(id: string): Observable<News[]> {
    return this.http.get<News[]>(`${this.url}/${id}`);
  }
}
