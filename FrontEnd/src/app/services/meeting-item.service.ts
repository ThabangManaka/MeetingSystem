import { MeetingItem } from './../Models/MeetingItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MeetingItemService {

  baseUrl = environment.baseUrl + '/meetingItem/';
  constructor(private http: HttpClient) { }


   getAllMeetingType(): Observable<MeetingItem[]> {
    return this.http.get<any[]>(this.baseUrl +'get'  );
}
getAllMeetingItemById(id : any) : Observable<any[]>{
  return this.http.get<any>(this.baseUrl +'get/'+ id );
}

createMeetingItem(meeting :MeetingItem) {
  return this.http.post(this.baseUrl +'post',meeting );
}


UpdateMeetingItem(id: any,meeting: MeetingItem){
  console.log(id)
  var putUrl = this.baseUrl + 'update/' + id ;
  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<any>(putUrl,meeting,{ headers: headers });
}

}
