import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  news: News = {
    title: '',
    content: '',
    published: false
  };

  submitted = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

  saveNews(): void {
    const data = {
      title: this.news.title,
      content: this.news.content,
      published: false
    };

    this.newsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newNews(): void {
    this.submitted = false;
    this.news = {
      title: '',
      content: '',
      published: false
    };
  }

}
