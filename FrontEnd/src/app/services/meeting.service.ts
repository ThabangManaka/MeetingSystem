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

  console.log(meeting)
 let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return this.http.post<any>(this.baseUrl + 'post/' ,meeting,{ headers: headers })
  }

   getAllMeeting(): Observable<Meeting[]> {

    return this.http.get<Meeting[]>(this.baseUrl +'get' );
}


UpdateMeeting(id: any,meeting: Meeting){

  var putUrl = this.baseUrl + 'update/' + id ;
  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<any>(putUrl,meeting,{ headers: headers });
}


}
