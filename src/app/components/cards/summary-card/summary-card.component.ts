import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/resume/profile';
import QRCode from 'qrcode';

/**
 * Summary card
 */
@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html'
})
export class SummaryCardComponent {
  /**
   * Summary
   */
  @Input()
  public summary: string = '';

  /**
   * Profiles links
   */
  @Input()
  public profiles: Profile[] = [];

  /**
   * Release version
   */
  @Input()
  public releaseVersion: string = '';

  /**
   * The QR code for the page
   */
  public qrCode: string = '';

  /**
   * Initialize the component
   */
  public constructor() {
    // Generate the QR code for the resume
    QRCode.toDataURL(
      window.location.href,
      {
        errorCorrectionLevel: 'low'
      },
      (error, url) => {
        this.qrCode = url;
      }
    );
  }
}
