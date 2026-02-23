import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConversionService } from '../conversion.service';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ConverterComponent implements OnInit, OnChanges, OnDestroy {
  @Input() selectedCategory: string = 'Distance';
  @Output() conversionResult = new EventEmitter<number>();

  inputValue: number | null = 0;
  selectedConverter: string = '';
  units: string[] = [];
  displayResult: number | null = null;
  private inputChange$ = new Subject<number>();
  private inputSubscription?: Subscription;

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
    this.inputSubscription = this.inputChange$
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(() => this.convert());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCategory']) {
      this.initializeUnits();
      this.displayResult = null;
      this.conversionResult.emit(0);
    }
  }

  initializeUnits(): void {
    this.units = this.conversionData[this.selectedCategory] || [];
    this.selectedConverter = '';
  }

  ngOnDestroy(): void {
    this.inputSubscription?.unsubscribe();
  }

  clearInput() {
    this.inputValue = null;
  }

  clearInputOnFocus(): void {
    if (this.inputValue === 0) {
      this.inputValue = null;
    }
  }

  onInputValueChange(value: number | null): void {
    if (value !== null && value < 0) {
      value = 0;
    }
    this.inputValue = value;

    if (this.inputValue === null) {
      this.displayResult = null;
      this.conversionResult.emit(0);
      return;
    }

    this.inputChange$.next(this.inputValue);
  }

  convert(): void {
    if (!this.selectedConverter || this.inputValue === null) {
      return;
    }

    const result = this.conversionService.convertUnits(
      this.inputValue,
      this.selectedConverter
    );

    this.displayResult = parseFloat(result.toFixed(4));
    this.conversionResult.emit(this.displayResult);
  }
}
