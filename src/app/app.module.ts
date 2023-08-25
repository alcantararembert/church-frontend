import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './domain/dashboard/dashboard.component';
import { FaithfulComponent } from './domain/faithful/faithful.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaithfulService } from './domain/faithful/faithful.service';
import { DashboardService } from './domain/dashboard/dashboard.service';
import { FooterComponent } from './domain/footer/footer.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FaithfulComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    [CollapseModule.forRoot()],
    BsDropdownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'pt-BR',
    }),
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    DashboardService,
    FaithfulService
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
