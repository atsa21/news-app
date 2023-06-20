import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NewsPageComponent } from './components/main/news-page/news-page.component';

const routes: Routes = [
  { path:'', redirectTo:'news', pathMatch:'full' },
  { path: 'news', component: MainComponent },
  { path: 'news/:id', component: NewsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
