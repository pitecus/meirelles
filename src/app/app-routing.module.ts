import { RouterModule, Routes } from '@angular/router';

import { ChangelogComponent } from './changelog/changelog.component';
import { NgModule } from '@angular/core';
import { OpenGraphCardComponent } from './open-graph-card/open-graph-card.component';
import { ResumeComponent } from './resume/resume.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  // Shell
  {
    component: ShellComponent,
    children: [
      // Resume
      {
        component: ResumeComponent,
        path: 'resume',
        pathMatch: 'full'
      },
      // Changelog
      {
        component: ChangelogComponent,
        path: 'changelog',
        pathMatch: 'full'
      }
    ],
    path: 'shell'
  },
  // Open Graph card
  {
    component: OpenGraphCardComponent,
    path: 'open-graph-card',
    pathMatch: 'full'
  },
  // Default route for application
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shell/resume'
  },
  // Wildcard route for a 404 page
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'shell/resume'
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
