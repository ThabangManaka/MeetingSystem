import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MeetingItem } from '../Models/MeetingItem';

@Injectable({
  providedIn: 'root'
})
export class MeetingItemService {

  baseUrl = environment.baseUrl + '/meetingItem/get/';
  constructor(private http: HttpClient) { }


   getAllMeetingType(): Observable<MeetingItem[]> {

    return this.http.get<any[]>(this.baseUrl  );
}
getAllMeetingItemById(id : any) : Observable<any[]>{

  return this.http.get<any>(this.baseUrl + id );
}
}
