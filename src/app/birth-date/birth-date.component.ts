import { Component, OnInit, Input } from '@angular/core';
import { DateUtilService } from '../common/date-util.service';

@Component({
  selector: 'app-birth-date',
  templateUrl: './birth-date.component.html',
  styleUrls: ['./birth-date.component.css']
})
export class BirthDateComponent implements OnInit {
  @Input() birthYear!: string;
  @Input() birthMonth!: string;

  public dateList: String[] = [];
  public selectMax: number = 31;

  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.getDateList();
  }

  public getDateList() {
    // 日の配列を初期化
    this.dateList = [];

    // 月の最終日が31日か判定
    if (this.dateUtilService.isMaxDateByThirtyOne(this.birthMonth)) {
      this.selectMax = 31;
    }

    // 月の最終日が30日か判定
    if (this.dateUtilService.isMaxDateByThirty(this.birthMonth)) {
      this.selectMax = 30;
    }

    // 2月の場合、閏年によって月の最終日が28日か29日かになるので制御
    if (this.birthMonth === '02') {
      // 閏年か判定。isLeapYearFlgがtrueの場合は閏年
      if (this.dateUtilService.isLeapYear(this.birthYear)) {
        // 閏年だから29日まで
        this.selectMax = 29;
      } else {
        // 閏年ではないので28日まで
        this.selectMax = 28;
      }
    }

    // 日の配列を作成
    for (let i = 1; i <= this.selectMax; i++) {
      this.dateList.push(i < 10 ? '0'+i : i.toString());
    }
  }
}
