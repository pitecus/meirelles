import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  // Resume.
  {
    component: ResumeComponent,
    path: 'resume',
    pathMatch: 'full'
  },
  // Default route for application.
  {
    path: '',
    pathMatch: 'full' ,
    redirectTo: 'resume'
  },
  // Wildcard route for a 404 page
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'resume'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
