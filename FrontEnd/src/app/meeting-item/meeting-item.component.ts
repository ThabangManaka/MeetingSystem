import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting-item',
  templateUrl: './meeting-item.component.html',
  styleUrls: ['./meeting-item.component.scss']
})
export class MeetingItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save(employee : any) {
   console.log(employee)
  }

}
