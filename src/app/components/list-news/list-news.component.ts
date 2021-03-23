import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  news?: News[];
  currentNews?: News;
  currentIndex = -1;
  title = '';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.retrieveNews();
  }

  retrieveNews(): void {
    this.newsService.getAll()
      .subscribe(
        data => {
          this.news = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveNews();
    this.currentNews = undefined;
    this.currentIndex = -1;
  }

  setActiveNews(news: News, index: number): void {
    this.currentNews = news;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.newsService.findByTitle(this.title)
      .subscribe(
        data => {
          this.news = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
