import { MeetingTypeService } from './../services/meeting-type.service';
import { MeetingType } from './../Models/MeetingType';
import { CreateMeetingComponent } from './../create-meeting/create-meeting.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MeetingService } from '../services/meeting.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {
  //@ViewChild(MatSort) sort: MatSort;
   meetType: any;
  @ViewChild(MatSort) sort = new MatSort();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
 // @ViewChild(MatPaginator) paginator = new MatPaginator();
  displayedColumns: string[] = ['ImageUrl','name','date','actions'];
  //dataSource = ELEMENT_DATA;
  //listData: MatTableDataSource<any>;
   dataSource: any;

  constructor(private meetingService : MeetingService,public dialog: MatDialog,
    private meetingTypeService: MeetingTypeService,
    private router : Router) { }

  ngOnInit(): void {



    this.meetingService.getAllMeeting().subscribe(allMeeting=>{
      console.log(allMeeting[0]);
      this.dataSource = new MatTableDataSource<any>(allMeeting),
      this.dataSource.sort = this.sort,
      this.dataSource.paginator = this.paginator;

      this.meetingTypeService.getAllMeetingTypeById(allMeeting[0].meetingTypeId).subscribe(TypeMeeting=> {
        this.meetType = TypeMeeting.name
      })
    })
  }
  updateDialog(id:any) {
    console.log(id)


  }

  openDialog(){}

  AddMeeting(){
    const dialogRef = this.dialog.open(CreateMeetingComponent, {

     // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

}
