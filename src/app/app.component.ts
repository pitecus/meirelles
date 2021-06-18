import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from './resume/resume';
import { Work } from './resume/work';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * The resume.
   */
  public resume?: Resume;

  /**
   * Filter jobs withing 10 years.
   */
  public isWorkFiltered = false;

  /**
   * Filtered work.
   */
  public filteredWork: Work[] = [];

  /**
   * Holds the date to filter.
   */
  private dateFilter: string;

  /**
   * Initialize the component.
   */
  public constructor(httpClient: HttpClient) {
    // Calculate 10 years ago.
    const now = new Date();
    now.setFullYear(now.getFullYear() - 10);
    const month: string = `${now.getMonth()}`.padStart(2, '0');
    const day: string = `${now.getDate()}`.padStart(2, '0');
    this.dateFilter = `${now.getFullYear()}-${month}-${day}`;
    console.log(this.dateFilter);

    // Get the resume.
    httpClient.get<Resume>('/assets/leo-meirelles.json')
      .subscribe(
        (resume: Resume) => {
          // Get the resume
          this.resume = resume;

          // Update filter.
          this.filterWork();
        }
      );
  }

  /**
   * Filter the work.
   */
  public filterWork(): void {
    // Update the filter.
    this.isWorkFiltered = this.isWorkFiltered === false;

    // Remove filter.
    if (this.isWorkFiltered === false) {
      this.filteredWork = this.resume?.work || [];
      return;
    }

    // Filter the work.
    if(this.resume && this.resume.work) {
      this.filteredWork = this.resume.work
      .filter((value: Work) => value.endDate > this.dateFilter);
    }
    console.log(this.filteredWork);
  }
}
