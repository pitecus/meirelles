import { Component, Input } from '@angular/core';

import { Publication } from '../../../resume/publication';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html'
})
export class PublicationCardComponent {
  /**
   * Publications and conferences
   */
  @Input()
  public publication?: Publication;
}
