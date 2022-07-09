import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-select',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.css']
})
export class DateSelectComponent implements OnInit {

  public years: string[] = [];
  public monthes: string[] = [];
  public days: string[] = [];

  public selectedYear: string;
  public selectedMonth: string;

  constructor() { }

  ngOnInit(): void {
    this.yearsList();
    this.monthesList();
    this.daysList();
  }

  ngDoCheck(): void {
    if (this.selectedYear && this.selectedMonth) {
      this.days = [];
      // 31日まである月
      if (this.selectedMonth === '1' ||
        this.selectedMonth === '3' ||
        this.selectedMonth === '5' ||
        this.selectedMonth === '7' ||
        this.selectedMonth === '8' ||
        this.selectedMonth === '10' ||
        this.selectedMonth === '12') {
        for (let i = 1; i <= 31; i++) {
          this.days.push(i.toString());
        }
      }

      // 30日まである月
      if (this.selectedMonth === '4' ||
        this.selectedMonth === '6' ||
        this.selectedMonth === '9' ||
        this.selectedMonth === '11') {
          for (let i = 1; i <= 30; i++) {
            this.days.push(i.toString());
          }
      }
      // 2月の場合
      if (this.selectedMonth === '2') {
        if (this.isLeapYear(this.selectedYear)) {
          for (let i = 1; i <= 29; i++) {
            this.days.push(i.toString());
          }
        } else {
          for (let i = 1; i <= 28; i++) {
            this.days.push(i.toString());
          }
        }
      }
    }
  }

  /**
   * 西暦のプルダウンを作成
   *
   * @return 西暦のプルダウンを今年→1900年になるように配列を作成
   */
  public yearsList() {
    // 配列を初期化
    this.years = [];

    // 今日の日付・時刻のオブジェクトを生成
    const now = new Date();
    // 上記のオブジェクトより年を取得
    const year = now.getFullYear();

    // 1900年-今年までの配列を作成。i.toString()でiを数値型から文字列型に変換している。
    for (let i=1900; i<=year; i++) {
      this.years.push(i.toString());
    }
    return this.years.reverse();
  }

  /**
   * 月の配列を作成
   */
  public monthesList() {
    this.monthes = [];

    for (let i = 1; i <= 12; i++) {
      this.monthes.push(i.toString());
    }
  }

  /**
   * 日の配列を作成
   */
  public daysList() {
    this.days = [];

    for (let i = 1; i <= 31; i++) {
      this.days.push(i.toString());
    }
  }

  /**
   * 西暦で選択した値を検知
   *
   * @param event 選択した年
   */
  public changeYear(event: any) {
    this.selectedYear = event.value;
  }

  /**
   * 月で選択した値を検知
   *
   * @param event 選択した月
   */
  public changeMonth(event: any) {
    this.selectedMonth = event.value;
  }

  /**
   * 閏年か判定
   *
   * @return trueは閏年、falseは閏年ではない
   */
  public isLeapYear(selectedYear: string) {
    // 文字列から数値に変換
    const year = Number(selectedYear);
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return true;
    }
    return false;
  }
}
