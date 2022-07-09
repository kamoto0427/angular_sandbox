// モジュール
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';

// Angular material関連
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// コンポーネント
import { AppComponent } from './app.component';
import { BirthSelectComponent } from './birth-select/birth-select.component';
import { BirthYearComponent } from './birth-year/birth-year.component';
import { BirthMonthComponent } from './birth-month/birth-month.component';
import { BirthDateComponent } from './birth-date/birth-date.component';
import { BirthComponent } from './birth/birth.component';
import { DateSelectComponent } from './date-select/date-select.component';
import { PhoneComponent } from './phone/phone.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const ROUTE_TABLE: Routes = [
  { path: 'userRegister', component: UserRegisterComponent },
  { path: 'birth-select', component: BirthSelectComponent },
  { path: 'birth', component: BirthComponent },
  { path: 'date', component: DateSelectComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BirthSelectComponent,
    BirthYearComponent,
    BirthMonthComponent,
    BirthDateComponent,
    BirthComponent,
    DateSelectComponent,
    PhoneComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTE_TABLE),
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
