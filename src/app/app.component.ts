import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from './resume/resume';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public resume?: Resume;

  /**
   * Initialize the component.
   */
  public constructor(httpClient: HttpClient) {
    console.log('constructor');

    // Get the resume.
    httpClient.get<Resume>('/assets/leo-meirelles.json')
      .subscribe(
        (resume: Resume) => {
          this.resume = resume;
        }
      )
  }
  title = 'resume';
}
