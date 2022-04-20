import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { createPopper } from "@popperjs/core";

@Component({
  selector: "app-pages-dropdown",
  templateUrl: "./pages-dropdown.component.html",
})
export class PagesDropdownComponent implements OnInit {
  /**
   * Show the dropdown popover
   */
  public dropdownPopoverShow = false;


  @ViewChild("btnDropdownRef", { static: false })
  private btnDropdownRef?: ElementRef;

  @ViewChild("popoverDropdownRef", { static: false })
  private popoverDropdownRef?: ElementRef;

  ngOnInit() { }
  toggleDropdown(event: Event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }
  }
  createPoppper() {
    createPopper(
      this.btnDropdownRef?.nativeElement,
      this.popoverDropdownRef?.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
}
