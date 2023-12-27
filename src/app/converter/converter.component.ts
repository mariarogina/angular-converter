import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConversionService } from '../conversion.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ConverterComponent implements OnInit {
  @Input() selectedCategory: string = 'Distance'; // Updated input name
  @Output() conversionResult = new EventEmitter<number>();

  inputValue: number | null = null;
  selectedConverter: string = '';
  units: string[] = [];
  displayResult: number | null = null;

  // Define conversion data based on categories
  conversionData: { [category: string]: string[] } = {
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
  };

  constructor(private conversionService: ConversionService) {}

  ngOnInit(): void {
    this.initializeUnits();
  }

  initializeUnits(): void {
    // Set the available units based on the selected category
    this.units = this.conversionData[this.selectedCategory] || [];
    // Reset the selected converter
    this.selectedConverter = '';
  }

  clearInput() {
    this.inputValue = null;
  }

  convert(): void {
    console.log('inputValue:', this.inputValue);
    console.log('selectedConverter:', this.selectedConverter);
    if (this.inputValue && this.selectedConverter) {
      const result = this.conversionService.convertUnits(
        this.inputValue,
        this.selectedConverter
      );
      console.log('Result:', result);

      // Round the result to 4 decimal places
      this.displayResult = parseFloat(result.toFixed(4));

      // Emit the rounded result
      this.conversionResult.emit(this.displayResult);
    }
  }
}
