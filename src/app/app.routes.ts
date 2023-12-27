import { Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
