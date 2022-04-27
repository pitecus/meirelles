import { Component, Input } from '@angular/core';

import { Language } from '../../../resume/language';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html'
})
export class LanguageCardComponent {
  /**
   * Language
   */
  @Input()
  public language?: Language;
}
