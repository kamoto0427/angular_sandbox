import { Component, OnInit } from '@angular/core';
import { V1Service } from 'src/app/service/v1.service';
import {  FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.css']
})
export class T1Component implements OnInit {
  public users: any;
  public userForm = new FormGroup({
    userId: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private v1Service: V1Service) { }

  ngOnInit(): void {
    this.v1Service.getUsers().subscribe((user) => {
      this.users = user;
    })
  }

  public addUser(data: any) {
    console.log(data);
    this.v1Service.postUser(data).subscribe((response) => {
      console.log(response);
    })
  }
}