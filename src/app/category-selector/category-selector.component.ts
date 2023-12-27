import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faRoad,
  faBalanceScale,
  faWineBottle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
})
export class CategorySelectorComponent {
  @Output() categorySelected = new EventEmitter<string>();

  categoryIcons = {
    Distance: faRoad,
    Weight: faBalanceScale,
    Volume: faWineBottle,
  };

  categories: string[] = ['Distance', 'Weight', 'Volume'];
  selectedCategory: keyof typeof this.categoryIcons | null = null;

  // Updated method to handle change event
  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;
    this.selectedCategory = value as keyof typeof this.categoryIcons;
    this.categorySelected.emit(value);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category as keyof typeof this.categoryIcons;
    this.categorySelected.emit(category);
  }
}
