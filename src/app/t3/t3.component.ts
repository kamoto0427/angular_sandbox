import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t3',
  templateUrl: './t3.component.html',
  styleUrls: ['./t3.component.css']
})
export class T3Component implements OnInit {
  public isGoldMember: boolean = false;
  public point: number;

  constructor() { }

  ngOnInit(): void {
    this.isGoldMember = true;
    this.point = 0;
  }

}
