import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // Output (notify) to anybody that is observing (listening) (pass data to the outside world)
  // EventEmitter an object (notify object), that listens for something to happen and emits 
  // an event when triggered (observer pattern)
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}