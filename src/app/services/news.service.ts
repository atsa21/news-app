import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { News, NewsDto } from '../models/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNews(page: number, limit: number): Observable<NewsDto> {
    const params = {
      _page: page,
      _limit: limit
    };

    return this.http.get<News[]>(this.url, { params, observe: 'response' }).pipe(
      map((response: HttpResponse<News[]>) => {
        const totalItems = parseInt(response.headers.get('X-Total-Count') || '0', 10);
        return { news: response.body ?? [], totalItems };
      })
    );
  }

  getNewsById(id: string): Observable<News[]> {
    return this.http.get<News[]>(`${this.url}/${id}`);
  }
}
