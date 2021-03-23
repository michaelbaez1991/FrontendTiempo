import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { DetailsNewsComponent } from './components/details-news/details-news.component';
import { ListNewsComponent } from './components/list-news/list-news.component';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: 'news', component: ListNewsComponent },
  { path: 'news/:id', component: DetailsNewsComponent },
  { path: 'add', component: AddNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
