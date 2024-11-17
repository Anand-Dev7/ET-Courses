import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'courses', component: CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
