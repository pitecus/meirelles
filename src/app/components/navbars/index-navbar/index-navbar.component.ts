import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index-navbar",
  templateUrl: "./index-navbar.component.html",
})
export class IndexNavbarComponent implements OnInit {
  public navbarOpen = false;

  public readonly window: Window;

  public constructor(window: Window) {
    this.window = window;
  }

  public ngOnInit(): void { }

  public setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
