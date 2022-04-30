import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'task1', loadChildren: () => import('./pages/task1/task1.module').then(m => m.Task1Module)},
  { path: 'task2', loadChildren: () => import('./pages/task2/task2.module').then(m => m.Task2Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
