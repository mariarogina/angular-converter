import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conversion-result',
  templateUrl: './conversion-result.component.html',
  styleUrls: ['./conversion-result.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ConversionResultComponent {
  @Input() convertedResult: number | null = null;
}
