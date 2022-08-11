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

  @ViewChild(MatSort) sort = new MatSort();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
 // @ViewChild(MatPaginator) paginator = new MatPaginator();
  displayedColumns: string[] = ['ImageUrl','restuarantName','actions'];
  //dataSource = ELEMENT_DATA;
  //listData: MatTableDataSource<any>;
   dataSource: any;

  constructor(private meetingService : MeetingService,public dialog: MatDialog,
    private router : Router) { }

  ngOnInit(): void {

    this.meetingService.getAllMeeting().subscribe(allMeeting=>{
      console.log(allMeeting);
      this.dataSource = new MatTableDataSource<any>(allMeeting),
      this.dataSource.sort = this.sort,

      this.dataSource.paginator = this.paginator;
    })
  }
  updateDialog(id:any) {
    console.log(id)


  }

  openDialog(){}

  AddMeeting(){
    
  }

}
