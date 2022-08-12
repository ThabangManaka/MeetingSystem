import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MeetingItemService } from '../services/meeting-item.service';

@Component({
  selector: 'app-meeting-item',
  templateUrl: './meeting-item.component.html',
  styleUrls: ['./meeting-item.component.scss']
})
export class MeetingItemComponent implements OnInit {
   meetingId: any;
   allMeetingType: any;
   @ViewChild(MatSort) sort = new MatSort();
   @ViewChild(MatPaginator)
   paginator!: MatPaginator;
  // @ViewChild(MatPaginator) paginator = new MatPaginator();
   displayedColumns: string[] = ['itemName','comments','status','action','actions'];
   //dataSource = ELEMENT_DATA;
   //listData: MatTableDataSource<any>;
    dataSource: any;

  constructor(private  meetingItemService : MeetingItemService,
    private route: ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.meetingId= this.route.snapshot.paramMap.get('id')
    this.meetingItemService.getAllMeetingItemById(this.meetingId).subscribe(meetingItem =>{
      console.log(meetingItem)
   this.allMeetingType =meetingItem
      this.dataSource = new MatTableDataSource<any>(meetingItem),
      this.dataSource.sort = this.sort,
      this.dataSource.paginator = this.paginator;
    })
  }

  save(employee : any) {
   console.log(employee)
  }

}
