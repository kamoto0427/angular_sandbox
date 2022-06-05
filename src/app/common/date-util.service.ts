import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  /**
   * 月の最終日が31日か
   *
   * @return 31日の月ならtrue,それ以外はfalse
   */
     public isMaxDateByThirtyOne(month: string): boolean {
      if (month === '01' || month === '03' || month === '05' || month === '07' || month === '08' || month === '10' || month === '12') {
        return true;
      }
      return false;
    }

    /**
     * 月の最終日が30日か
     *
     * @return 30日の月ならtrue,それ以外はfalse
     */
    public isMaxDateByThirty(month: string): boolean {
      if (month === '04' || month === '06' || month === '09' || month === '11') {
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
        return true;
      }
      return false;
    }
}
