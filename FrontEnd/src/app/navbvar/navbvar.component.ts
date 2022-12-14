import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateMeetingComponent } from '../create-meeting/create-meeting.component';

@Component({
  selector: 'app-navbvar',
  templateUrl: './navbvar.component.html',
  styleUrls: ['./navbvar.component.scss']
})
export class NavbvarComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  logout() {

  }

  AddMeeting(){
    const dialogRef = this.dialog.open(CreateMeetingComponent, {
      width: '120kw',
     // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
}
