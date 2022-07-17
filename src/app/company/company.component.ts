import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public companyName: string;

  constructor() { }

  ngOnInit(): void {
    this.companyName = 'テスト企業1';
  }

  public getStoreName(storeName: string) {
    console.log(storeName);
  }
}
