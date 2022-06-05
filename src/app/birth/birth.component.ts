import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.css']
})
export class BirthComponent implements OnInit {
  public yearList: String[] = [];
  public monthList: String[] = [];
  public dateList: String[] = [];
  public BIRTH_YEAR_START = 1900;
  public year!: string;
  public month = '10';
  public isLeapYearFlg = false;
  public selectMax: number = 31;
  public selectedYear!: string;

  constructor() { }

  ngOnInit(): void {
    this.getYearList();
    this.getMonthList();
    this.getDateList();
  }

  public getYearList() {
    this.yearList = [];

    for (let i = this.BIRTH_YEAR_START; i <= 2022; i++) {
      this.yearList.push(i.toString());
    }
  }

  public getMonthList() {
    this.monthList = [];

    for (let i = 1; i <= 12; i++) {
      this.monthList.push(i < 10 ? '0'+i : i.toString());
    }
  }

  public getDateList() {
    // 日の配列を初期化
    this.dateList = [];

    // 月の最終日が31日か判定
    if (this.isMaxDateByThirtyOne()) {
      this.selectMax = 31;
    }

    // 月の最終日が30日か判定
    if (this.isMaxDateByThirty()) {
      this.selectMax = 30;
    }

    // 2月の場合、閏年によって月の最終日が28日か29日かになるので制御
    if (this.month === '02') {
      // 閏年か判定。isLeapYearFlgがtrueの場合は閏年
      this.isLeapYear(this.year);
      if (this.isLeapYearFlg) {
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

  /**
   * 月の最終日が31日か
   *
   * @return 31日の月ならtrue,それ以外はfalse
   */
  public isMaxDateByThirtyOne(): boolean {
    if (this.month === '01' || this.month === '03' || this.month === '05' || this.month === '07' || this.month === '08' || this.month === '10' || this.month === '12') {
      return true;
    }
    return false;
  }

  /**
   * 月の最終日が30日か
   *
   * @return 30日の月ならtrue,それ以外はfalse
   */
  public isMaxDateByThirty(): boolean {
    if (this.month === '04' || this.month === '06' || this.month === '09' || this.month === '11') {
      return true;
    }
    return false;
  }

  /**
   * 閏年か判定
   *
   * @param selectYear 選択した年
   * @return 閏年の場合はtrue,それ以外はfalse
   */
  public isLeapYear(selectYear: string): boolean {
    const year = Number(selectYear);
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return this.isLeapYearFlg = true;
    }
    return this.isLeapYearFlg = false;
  }

}
