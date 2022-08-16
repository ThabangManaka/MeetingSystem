import { MeetingItem } from './../Models/MeetingItem';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from './../services/alertify.service';
import { MeetingItemService } from './../services/meeting-item.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-meeting-item-form',
  templateUrl: './meeting-item-form.component.html',
  styleUrls: ['./meeting-item-form.component.scss']
})
export class MeetingItemFormComponent implements OnInit {

  //_productForm: FormGroup;

  meetingId: any;
  message: string = "Meeting Task";
  private _formBuilder: any;
  meetingForm = new FormGroup({
    itemName: new FormControl('', [Validators.required]),
    comments: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required]),

  });

  get  itemNameControl() : FormControl {
    return this. meetingForm.get('itemName') as FormControl;
  }
  
  get  commentsControl() : FormControl {
    return this. meetingForm.get('comments') as FormControl;
  }
  get  statusControl() : FormControl {
    return this. meetingForm.get('status') as FormControl;
  }
  get  actionControl() : FormControl {
    return this. meetingForm.get('action') as FormControl;
  }

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<MeetingItemFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private meetingItemService: MeetingItemService,
    private alertifyService: AlertifyService,
    private route : ActivatedRoute) {
 
    this.meetingId = Number(this.route.snapshot.paramMap.get('id'));

    console.log(this.data);
        if (this.data.itemName) {
     // @ts-ignore: Object is possibly 'null'
      this.meetingForm.get('itemName').setValue(this.data.itemName)
      // @ts-ignore: Object is possibly 'null'
      this.meetingForm.get('comments').setValue(this.data.comments)
      // @ts-ignore: Object is possibly 'null'
      this.meetingForm.get('status').setValue(this.data.status)
      // @ts-ignore: Object is possibly 'null'
      this.meetingForm.get('action').setValue(this.data.action)

  }
 }

     onNoClick(): void {
      this.dialogRef.close();
     }

  ngOnInit(): void {
    this.meetingId = this.route.snapshot.paramMap.get('id');
  }

   onSubmit() {

  if(this.data.itemName) {

    const meetingItem : MeetingItem ={
      itemName : this.meetingForm.value.itemName,
      comments : this.meetingForm.value.comments,
     status : this.meetingForm.value.status,
     action : this.meetingForm.value.action,
      meetingId : this.data.meetingId
     }
 
this.meetingItemService.UpdateMeetingItem(this.data.meetingItemId,meetingItem).subscribe(res =>{
  this.alertifyService.success("Task Updated Successfully")
  this.dialogRef.close();
   
   },
    error =>{
      console.log(error)
      this.alertifyService.error("Sommething Wrong!")})


  }else{


  const meetingItem : MeetingItem ={
   itemName : this.meetingForm.value.itemName,
   comments : this.meetingForm.value.comments,
  status : this.meetingForm.value.status,
  action : this.meetingForm.value.action,

   meetingId : this.data.name
     }

      this.meetingItemService.createMeetingItem(meetingItem).subscribe(res =>{
        this.alertifyService.success("Task Created Successfully")
        this.dialogRef.close();
         
         },
          error =>{
            console.log(error)
            this.alertifyService.error("Sommething Wrong!")})
    
          }
   }

   onDecline(){
    this.dialogRef.close();

   }
}
