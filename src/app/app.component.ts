import { animate, state, style, transition, trigger } from '@angular/animations';

import { Component } from '@angular/core';

@Component({
  animations: [
    trigger('openClose', [
      state('open', style({

      })),
      state('closed', style({
        transform: 'translateX(-100%)'
      })),
      transition('open => closed', [
        animate('200ms')
      ]),
      transition('closed => open', [
        animate('200ms')
      ])
    ])
  ],
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

  /**
   * Valid menu states.
   */
  public menuState: 'open'|'closed' = 'closed';

  /**
   * Toggle the menu
   */
  public toggleMenu(): void {
    // Close menu.
    if (this.menuState === 'open') {
      this.menuState = 'closed';
      return;
    }

    // Open menu.
    this.menuState = 'open';
  }

}
