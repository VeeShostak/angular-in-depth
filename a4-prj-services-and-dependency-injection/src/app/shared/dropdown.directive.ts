import { Directive, HostListener, HostBinding } from '@angular/core';

// once clicked attach a the 'open' css element
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Host will be the element you apply the directive on

  @HostBinding('class.open') isOpen = false;

  // listen for a click event. onClick, toggle dropdown
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
