import { Component, Input, Output,EventEmitter } from "@angular/core";


@Component({
  selector: 'categoryfilter',
  templateUrl:"./CategoryFilter.component.html"
})

export class CategoryFilterComponent {

  
  currentSelectedOption: string = "All";

  @Output()
  OptionChanged: EventEmitter<string> = new EventEmitter<string>();

  

  @Input()
  All: string;

  @Input()
  Technology: string;

  @Input()
  Software: string;

  @Input()
  Hardware: string;

  OnOptionChanged() {
    this.OptionChanged.emit(this.currentSelectedOption);
    console.log(this.currentSelectedOption);
  }

}
