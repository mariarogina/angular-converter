import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-conversion-result',
  templateUrl: './conversion-result.component.html',
  styleUrls: ['./conversion-result.component.css'],
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
})
export class ConversionResultComponent {
  @Input() convertedResult: number | null = null;
}
