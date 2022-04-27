import { Component, Input } from '@angular/core';

import { Education } from '../../../resume/education';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html'
})
export class EducationCardComponent {
  /**
   * Education information
   */
  @Input()
  public education?: Education;
}
