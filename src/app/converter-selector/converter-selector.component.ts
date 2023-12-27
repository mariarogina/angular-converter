import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converter-selector',
  templateUrl: './converter-selector.component.html',
  styleUrls: ['./converter-selector.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ConverterSelectorComponent {
  @Input() category: string = 'meters to miles';
  @Output() converterSelected = new EventEmitter<string>();

  converters: { [category: string]: string[] } = {
    Distance: [
      'meters to miles',
      'miles to meters',
      'meters to kilometers',
      'kilometers to meters',
    ],
    Weight: [
      'kilograms to pounds',
      'pounds to kilograms',
      'kilograms to ounces',
      'ounces to kilograms',
    ],
    Volume: [
      'liters to gallons',
      'gallons to liters',
      'liters to cups',
      'cups to liters',
    ],
    // Add more categories and converters as needed
  };

  onConverterChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.converterSelected.emit(selectElement.value);
  }
}
