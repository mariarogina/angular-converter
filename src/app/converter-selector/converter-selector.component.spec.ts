import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterSelectorComponent } from './converter-selector.component';

describe('ConverterSelectorComponent', () => {
  let component: ConverterSelectorComponent;
  let fixture: ComponentFixture<ConverterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConverterSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConverterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
