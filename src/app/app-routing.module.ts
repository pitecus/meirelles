import { RouterModule, Routes } from '@angular/router';

import { ChangelogComponent } from './changelog/changelog.component';
import { NgModule } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  // Resume.
  {
    component: ResumeComponent,
    path: 'resume',
    pathMatch: 'full'
  },
  // Changelog.
  {
    component: ChangelogComponent,
    path: 'changelog',
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
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
