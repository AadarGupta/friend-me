import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetContactsService {
  constructor(private http: HttpClient) {}

  // Gets data from the API endpoint
  getData(pageNum: number): Observable<any> {
    let url: string = `https://randomuser.me/api/?seed=nuvalence&inc=name,location,picture,phone,cell,email,dob,id&results=10&page=${pageNum}`;
    return this.http.get(url);
  }
}
