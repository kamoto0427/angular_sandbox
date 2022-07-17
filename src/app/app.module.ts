// モジュール
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

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
import { T1Component } from 'src/app/t1/t1.component';
import { T3Component } from 'src/app/t3/t3.component';
import { CompanyComponent } from 'src/app/company/company.component';
import { StoreComponent } from 'src/app/store/store.component';

const ROUTE_TABLE: Routes = [
  { path: 'userRegister', component: UserRegisterComponent },
  { path: 'birth-select', component: BirthSelectComponent },
  { path: 'birth', component: BirthComponent },
  { path: 'date', component: DateSelectComponent },
  { path: 't1', component: T1Component },
  { path: 't3', component: T3Component },
  { path: 'company', component: CompanyComponent },
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
    T1Component,
    T3Component,
    CompanyComponent,
    StoreComponent,
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
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
