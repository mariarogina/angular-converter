// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { environment } from './environments/environment';
import { AppRoutes } from './app/app.routes';
import { enableProdMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(AppRoutes), provideAnimations()],
});
