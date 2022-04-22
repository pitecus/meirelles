import { Component, Input } from '@angular/core';

import { Work } from '../../../resume/work';

@Component({
  selector: 'app-work-experience-card',
  templateUrl: './work-experience-card.component.html'
})
export class WorkExperienceCardComponent {
  /**
   * Basic resume information
   */
  @Input()
  public work?: Work;
}
