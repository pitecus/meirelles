import { Changelog } from './changelog';
import { CommitType } from './commit-type';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Release } from './release';
import commitTypes from './commit-types.json';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent {
  /**
   * Release entries.
   */
  public releases: Release[] = [];

  /**
   * Commit type.
   */
  public commitTypes: {[commitType: string]: CommitType} = commitTypes;

  /**
   * Initialize the component.
   */
  public constructor(httpClient: HttpClient) {
    // Get the resume.
    httpClient.get<Changelog[]>('/assets/changelog.json')
      .subscribe(
        (changelog: Changelog[]) => {
          // Current release.
          let currentRelease: Release;

          // Loop throught the changelog and populate the release.
          changelog.forEach((entry: Changelog): void => {
            // Extract tag from current entry.
            const tag = entry
              .decoration
              .replace(/[ \(\)]/g, '')
              .split(',')
              .filter((entry:string) => entry.startsWith('tag:') === true)
              .pop();

            if (tag !== undefined) {
              // Initialize a release.
              currentRelease = {
                changes: [],
                version: tag.replace('tag:', '')
              };

              // Add to the releases.
              this.releases.push(currentRelease);
            }

            if (currentRelease === undefined) {
              // Initialize a release.
              currentRelease = {
                changes: [],
                version: ''
              };

              // Add to the releases.
              this.releases.push(currentRelease);
            }

            // Parse the commit message.
            const commitDetails = entry.subject.split(':', 2);

            // Append to the release.
            currentRelease.changes.push({
              commiter: entry.commiter,
              date: entry.date,
              message: {
                scope: '',
                subject: commitDetails[1].trim(),
                type: commitDetails[0].trim()
              }
            })
          });
        }
      );
  }
}
