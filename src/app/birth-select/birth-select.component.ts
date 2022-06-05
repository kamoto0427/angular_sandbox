import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birth-select',
  templateUrl: './birth-select.component.html',
  styleUrls: ['./birth-select.component.css']
})
export class BirthSelectComponent implements OnInit {
  public birthYear!: string;
  public birthMonth!: string;

  constructor() { }

  ngOnInit(): void {
  }

  changeYear(year: string) {
    this.birthYear = year;
  }

  changeMonth(year: string) {
    this.birthMonth = year;
  }
}
