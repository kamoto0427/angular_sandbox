// モジュール
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular material関連
import { MatSelectModule } from '@angular/material/select';

// コンポーネント
import { AppComponent } from './app.component';
import { BirthSelectComponent } from './birth-select/birth-select.component';
import { BirthYearComponent } from './birth-year/birth-year.component';
import { BirthMonthComponent } from './birth-month/birth-month.component';
import { BirthDateComponent } from './birth-date/birth-date.component';
import { BirthComponent } from './birth/birth.component';

const ROUTE_TABLE: Routes = [
  { path: 'birth-select', component: BirthSelectComponent },
  { path: 'birth', component: BirthComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BirthSelectComponent,
    BirthYearComponent,
    BirthMonthComponent,
    BirthDateComponent,
    BirthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTE_TABLE),
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
