import { MeetingType } from './../Models/MeetingType';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetingTypeService {

  baseUrl = environment.baseUrl + '/meetingType/get/';
  constructor(private http: HttpClient) { }


   getAllMeetingType(): Observable<MeetingType[]> {

    return this.http.get<any[]>(this.baseUrl  );
}
getAllMeetingTypeById(id : any) : Observable<MeetingType>{

  return this.http.get<any>(this.baseUrl + id );
}
}
