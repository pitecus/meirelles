import { Component, Input } from '@angular/core';
import { Release } from '../../../changelog/release';
import commitTypes from '../../../changelog/commit-types.json';
import { CommitType } from '../../../changelog/commit-type';

@Component({
  selector: 'app-release-card',
  templateUrl: './release-card.component.html'
})
export class ReleaseCardComponent {
  /**
   * Commit type.
   */
  public commitTypes: { [commitType: string]: CommitType } = commitTypes;

  /**
   * Release
   */
  @Input()
  public release?: Release;
}
