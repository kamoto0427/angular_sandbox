import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-birth-year',
  templateUrl: './birth-year.component.html',
  styleUrls: ['./birth-year.component.css']
})
export class BirthYearComponent implements OnInit {
  @Output() selectedYear = new EventEmitter<string>();

  public yearList: String[] = [];
  public BIRTH_YEAR_START = 1900;

  constructor() { }

  ngOnInit(): void {
    this.getYearList();
  }

  public getYearList() {
    this.yearList = [];

    for (let i = this.BIRTH_YEAR_START; i <= 2022; i++) {
      this.yearList.push(i.toString());
    }
  }

  onSelectChangeYear(event: any){
    this.selectedYear.emit(event.value);
  }
}
