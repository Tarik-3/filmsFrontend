import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule, HttpHandler, provideHttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideProtractorTestingSupport } from '@angular/platform-browser';
import {  RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
// import { CollecteService } from './collecte.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),  importProvidersFrom(HttpClientModule),ReactiveFormsModule,importProvidersFrom(BrowserModule),
    RichTextEditorModule
  ]
};
function provideAnimations(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

