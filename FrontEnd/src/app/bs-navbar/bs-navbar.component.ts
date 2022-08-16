import { MeetingItemFormComponent } from './../meeting-item-form/meeting-item-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {
  meetingId: any;
  constructor(public dialog: MatDialog,private route: ActivatedRoute,) { 
    this.meetingId= this.route.snapshot.paramMap.get('id')

    console.log(this.meetingId)
  }

  ngOnInit(): void {
  }
  AddMeetingItem(){

    const dialogRef = this.dialog.open(MeetingItemFormComponent, {
      width: '160kw',
     data: {name :this.meetingId },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

  }

