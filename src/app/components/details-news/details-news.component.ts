import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-details-news',
  templateUrl: './details-news.component.html',
  styleUrls: ['./details-news.component.scss']
})
export class DetailsNewsComponent implements OnInit {
  currentNews: News = {
    title: '',
    content: '',
    published: false
  };
  message = '';
  others: any;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.message = '';
      this.getNews(this.route.snapshot.params.id);
    }
  
    getNews(id: string): void {
      this.newsService.get(id)
        .subscribe(
          data => {
            this.currentNews = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  
    updatePublished(status: boolean): void {
      const data = {
        title: this.currentNews.title,
        content: this.currentNews.content,
        published: status
      };
  
      this.newsService.update(this.currentNews.id, data)
        .subscribe(
          response => {
            this.currentNews.published = status;
            console.log(response);
            this.message = response.message;
          },
          error => {
            console.log(error);
          });
    }
  
    updateNews(): void {
      this.others = {
        title: this.currentNews.title,
        content: this.currentNews.content
      };

      this.newsService.update(this.currentNews.id, this.others)
        .subscribe(
          response => {
            console.log(response);
            this.message = response.message;
          },
          error => {
            console.log(error);
          });
    }
  
    deleteNews(): void {
      this.newsService.delete(this.currentNews.id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/news']);
          },
          error => {
            console.log(error);
          });
    }

}
