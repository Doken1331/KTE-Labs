import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/modules/home/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add', loadChildren: () => import('./modules/add/add.module').then((m) => m.AddModule) },
  {
    path: 'about/:id',
    loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
