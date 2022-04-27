import { Changelog } from './changelog';
import { ChangelogDetail } from './changelog-detail';
import { CommitType } from './commit-type';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Release } from './release';
import commitTypes from './commit-types.json';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html'
})
export class ChangelogComponent {
  /**
   * Release entries.
   */
  public releases: Release[] = [];

  /**
   * Commit type.
   */
  public commitTypes: { [commitType: string]: CommitType } = commitTypes;

  /**
   * Sorting commit types.
   */
  private sortingTypes: { [type: string]: number } = {
    feat: 1,
    fix: 2,
    perf: 3,
    test: 4,
    style: 5,
    revert: 6,
    build: 7,
    refactor: 8,
    chore: 9,
    docs: 10,
    ci: 11,
  };

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
          let currentChanges: { [type: string]: ChangelogDetail[] };

          // Loop throught the changelog and populate the release.
          changelog.forEach((entry: Changelog): void => {
            // Extract tag from current entry.
            const tag = entry
              .decoration
              .replace(/[ \(\)]/g, '')
              .split(',')
              .filter((entry: string) => entry.startsWith('tag:') === true)
              .pop();

            if (tag !== undefined || currentRelease === undefined) {
              // Current changes grouped by type.
              currentChanges = {};

              if (tag !== undefined) {
                // Initialize a release.
                currentRelease = {
                  changes: [],
                  version: tag.replace('tag:', '')
                };
              } else {
                // Initialize a release.
                currentRelease = {
                  changes: [],
                  version: ''
                };
              }

              // Add to the releases.
              this.releases.push(currentRelease);
            }

            // Parse the commit message.
            const [type, subject] = entry
              .subject
              .replace(/\(.*\):/, ':')
              .split(':', 2);

            // Ignore malformed messages
            if (subject == null) {
              return;
            }

            // Check if type already exists.
            if (currentChanges[type] === undefined) {
              currentChanges[type] = [];

              // Append to the release.
              currentRelease.changes.push({
                type,
                changes: currentChanges[type]
              });
            }

            // Append
            currentChanges[type].push({
              commiter: entry.commiter,
              date: entry.date,
              message: {
                scope: '',
                subject: subject.trim(),
                type
              }
            })
          });

          // Sort the change types.
          this.releases
            .forEach((release) => {
              release.changes
                .sort((a, b) => this.sortingTypes[a.type] - this.sortingTypes[b.type])
            })
        }
      );
  }
}
