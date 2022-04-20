import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { createPopper } from "@popperjs/core";

@Component({
  selector: "app-index-dropdown",
  templateUrl: "./index-dropdown.component.html",
})
export class IndexDropdownComponent implements OnInit {
  public dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false })
  public btnDropdownRef?: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  public popoverDropdownRef?: ElementRef;
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
