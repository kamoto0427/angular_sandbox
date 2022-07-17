import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class V1Service {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  public postUser(data: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }
}
