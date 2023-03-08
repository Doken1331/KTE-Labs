import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
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
