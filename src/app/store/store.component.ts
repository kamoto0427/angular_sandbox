import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  @Input() companyName: string;
  @Output() storeName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public postStoreName() {
    this.storeName.emit('テスト店舗1');
  }

}
