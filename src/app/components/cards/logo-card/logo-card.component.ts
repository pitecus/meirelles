import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-card',
  templateUrl: './logo-card.component.html'
})
export class LogoCardComponent {
  /**
   * The path to the image.
   */
  @Input()
  public src?: string;

  /**
   * Text description of the image.
   */
  @Input()
  public alt?: string;
}
