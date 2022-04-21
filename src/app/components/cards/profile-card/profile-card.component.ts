import { Component, Input } from '@angular/core';
import { Basics } from 'src/app/resume/basics';

/**
 * Profile card
 */
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html'
})
export class ProfileCardComponent {
  /**
   * Basic resume information
   */
  @Input()
  public basics?: Basics;
}
