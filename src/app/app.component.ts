import { Component } from '@angular/core';
import { CategorySelectorComponent } from './category-selector/category-selector.component'; // Adjust the path as necessary
import { ConversionResultComponent } from './conversion-result/conversion-result.component';
import { ConverterComponent } from './converter/converter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CategorySelectorComponent,
    ConversionResultComponent,
    ConverterComponent,
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
  ],
})
export class AppComponent {
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
