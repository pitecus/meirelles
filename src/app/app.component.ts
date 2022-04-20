import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  animations: [
    trigger('openClose', [
      state('open', style({

      })),
      state('closed', style({
        transform: 'translateX(-100%)'
      })),
      transition('open => closed', [
        animate('350ms')
      ]),
      transition('closed => open', [
        animate('350ms')
      ])
    ])
  ],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public navbarOpen = false;

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
  public menuState: 'open' | 'closed' = 'open';

  public ngOnInit() {
    setTimeout(() => {
      this.toggleMenu();
    }, 1000);
  }

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

  /**
   * Close the menu
   */
  public closeNav(): void {
    // Open menu.
    this.menuState = 'closed';
  }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
