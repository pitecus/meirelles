import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  /**
   * The navigation items.
   */
  public readonly navigation = [
    {
      label: 'resume',
      link: '/resume'
    },
    {
      label: 'changelog',
      link: '/changelog'
    }
  ];

}
