import { Component, Input } from '@angular/core';
import { Skill } from '../../../resume/skill';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html'
})
export class SkillCardComponent {
  /**
   * Publications and conferences
   */
  @Input()
  public skill?: Skill;
}
