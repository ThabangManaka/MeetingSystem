import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting } from '../Models/Meeting';
@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  baseUrl = environment.baseUrl + '/meeting/';
  constructor(private http: HttpClient) { }

  AddeMeeting(meeting: Meeting){

  //   console.log(order)
 let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.post<any>(this.baseUrl + 'post/' ,meeting,{ headers: headers })
  }

   getAllMeeting(): Observable<Meeting[]> {

    return this.http.get<any[]>(this.baseUrl +'get' );
}


}
