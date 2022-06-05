import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-birth-month',
  templateUrl: './birth-month.component.html',
  styleUrls: ['./birth-month.component.css']
})
export class BirthMonthComponent implements OnInit {
  @Output() selectedMonth = new EventEmitter<string>();

  public monthList: String[] = [];
  public selected: string = '04';

  constructor() { }

  ngOnInit(): void {
    this.getMonthList();
  }

  public getMonthList() {
    this.monthList = [];

    for (let i = 1; i <= 12; i++) {
      this.monthList.push(i < 10 ? '0'+i : i.toString());
    }
  }

  onSelectChangeMonth(event: any){
    this.selectedMonth.emit(event.value);
  }

}
