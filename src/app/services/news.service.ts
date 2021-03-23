import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';

const baseUrl = '/api/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<News[]> {
    return this.http.get<News[]>(baseUrl);
  }

  get(id: any): Observable<News> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/create`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<News[]> {
    return this.http.get<News[]>(`${baseUrl}?title=${title}`);
  }
}
