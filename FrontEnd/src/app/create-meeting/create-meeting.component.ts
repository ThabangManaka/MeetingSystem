import { MeetingService } from './../services/meeting.service';
import { MeetingTypeService } from './../services/meeting-type.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MeetingType } from '../Models/MeetingType';

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.scss']
})
export class CreateMeetingComponent implements OnInit {
   _productForm: FormGroup;
  message: string = "Product Details";
  minDate = new Date();
  maxDate = new Date(2022,12,31);
  slides: any;
  MeetingTypeList: MeetingType[];
  constructor(private _formBuilder: FormBuilder, private meetingTypeService: MeetingTypeService,
    private meetingService : MeetingService,
    private dialogRef: MatDialogRef<CreateMeetingComponent>,) { }

    onNoClick(): void {
      this.dialogRef.close();
     }

  ngOnInit(): void {

 this.meetingTypeService.getAllMeetingType().subscribe(allMeetype => { 
      this.MeetingTypeList = allMeetype

      console.log(this.MeetingTypeList);
  })
    this._productForm = this._formBuilder.group({

       meetingTypeId: [ '', [Validators.required]],
       meetingDate: [ '', [Validators.required]],
      
    });
  }

  onSubmit() {
    console.log(this._productForm.value);

    this.meetingService.AddeMeeting(this._productForm.value);

    this.dialogRef.close();

  }

  onDecline() {
  }

}
