import { Component } from '@angular/core';
import { CategorySelectorComponent } from '../category-selector/category-selector.component'; // Adjust the path as necessary
import { ConversionResultComponent } from '../conversion-result/conversion-result.component';
import { ConverterComponent } from '../converter/converter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CategorySelectorComponent,
    ConversionResultComponent,
    ConverterComponent,
    CommonModule,
    FontAwesomeModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  selectedCategory: string = 'Distance';
  selectedConverter: string | null = null;
  conversionResult: number = 0;

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    this.conversionResult = 0;
  }

  onConversionResult(result: number): void {
    this.conversionResult = result;
  }
}
