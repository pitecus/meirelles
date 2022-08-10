import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import QRCode from 'qrcode';
import { Release } from '../changelog/release';
import { Resume } from '../resume/resume';

@Component({
  selector: 'app-open-graph-card',
  templateUrl: './open-graph-card.component.html'
})
export class OpenGraphCardComponent {

  /**
   * The resume.
   */
  public resume?: Resume;

  /**
   * The release.
   */
  public release?: Release;

  /**
   * The QR code for the page
   */
  public qrCode: string = '';

  /**
   * Initialize the component.
   */
  public constructor(httpClient: HttpClient) {
    // Get the resume.
    httpClient.get<Resume>('/assets/resume.json')
      .subscribe(
        (resume: Resume) => {
          // Get the resume
          this.resume = resume;
        }
      );

    // Get the resume.
    httpClient.get<Release>('/assets/release.json')
      .subscribe(
        (release: Release) => {
          // Get the resume
          this.release = release;
        }
      );


    // Generate the QR code for the resume
    console.log(window.location.href);
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

