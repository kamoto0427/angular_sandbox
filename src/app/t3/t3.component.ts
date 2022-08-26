import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-t3',
  templateUrl: './t3.component.html',
  styleUrls: ['./t3.component.css']
})
export class T3Component implements OnInit {
  public item: string | null;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  /**
   * トップ画面に遷移する
   */
  public onClickToTop() {
    this.router.navigate(["/"]);
  }

  /**
   * ユーザー登録画面に遷移する
   */
  public onClickToUserRegister() {
    this.router.navigate(["/userRegister"]);
  }

  /**
   * 企業一覧画面に遷移する
   */
  public onClickToCompany() {
    this.router.navigate(["/company"]);
  }
}
