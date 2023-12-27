import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConversionService {
  constructor() {}

  convertUnits(value: number, conversionKey: string): number {
    type ConversionRate = { [key: string]: number };
    const conversionRates: ConversionRate = {
      // Distance conversions
      'meters to miles': 0.000621371,
      'miles to meters': 1609.34,
      'meters to kilometers': 0.001,
      'kilometers to meters': 1000,
      // Weight conversions
      'kilograms to pounds': 2.20462,
      'pounds to kilograms': 0.453592,
      'kilograms to ounces': 35.274,
      'ounces to kilograms': 0.0283495,
      // Volume conversions
      'liters to gallons': 0.264172,
      'gallons to liters': 3.78541,
      'liters to cups': 4.22675,
      'cups to liters': 0.236588,
      // ... other conversions
    };

    const conversionRate = conversionRates[conversionKey];

    if (conversionRate === undefined) {
      throw new Error(`Conversion for ${conversionKey} is not defined.`);
    }

    return value * conversionRate;
  }
}
