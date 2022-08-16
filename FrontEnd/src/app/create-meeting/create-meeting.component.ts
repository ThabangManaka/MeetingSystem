import { MeetingType } from './../Models/MeetingType';
import { AlertifyService } from './../services/alertify.service';
import { MeetingService } from './../services/meeting.service';
import { MeetingTypeService } from './../services/meeting-type.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.scss']
})
export class CreateMeetingComponent implements OnInit {
  // _productForm: FormGroup;
  message: string = "Create Meeting";
  minDate = new Date();
  maxDate = new Date(2022,12,31);
  slides: any;
  MeetingTypeList: MeetingType[];

  private _formBuilder: any;
  meetingForm = new FormGroup({
    meetingDescription: new FormControl('', [Validators.required]),
    meetingDate: new FormControl('', [Validators.required]),
    meetingTypeId: new FormControl('', [Validators.required])
  });


  
  get  meetingDescriptionControl() : FormControl {
    return this. meetingForm.get('meetingDescription') as FormControl;
  }

  get  meetingDateControl() : FormControl {
    return this. meetingForm.get('meetingDate') as FormControl;
  }
  

    get meetingTypeIdControl() : FormControl {
    return this. meetingForm.get('meetingTypeId') as FormControl;
  }
  

  constructor(private fb: FormBuilder, private meetingTypeService: MeetingTypeService,
    private meetingService : MeetingService,
    private alertifyService: AlertifyService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateMeetingComponent>,) {


    
      if (this.data) {
        // @ts-ignore: Object is possibly 'null'
         this.meetingForm.get('meetingDescription').setValue(this.data.meetingDescription)
         // @ts-ignore: Object is possibly 'null'
         this.meetingForm.get('meetingDate').setValue(this.data.meetingDate)
         // @ts-ignore: Object is possibly 'null'
         this.meetingTypeService.getAllMeetingTypeById(this.data.meetingTypeId).subscribe(TypeMeeting=> {

          // @ts-ignore: Object is possibly 'null'
         this.meetingForm.get('meetingTypeId').setValue(TypeMeeting.meetingTypeId)
          //  this.meetType = TypeMeeting.name
           })
      
     }

     }

    onNoClick(): void {
      this.dialogRef.close();
     }

  ngOnInit(): void {

 this.meetingTypeService.getAllMeetingType().subscribe(allMeetype => {
      this.MeetingTypeList = allMeetype
  })
  
  }

  onSubmit() {

    console.log(this.data)
    if (this.data){
      this.meetingService.UpdateMeeting(this.data.meetingId,this.meetingForm.value).subscribe(res =>{
     this.alertifyService.success("Updated Meeting SuccesFully")
        //this.router.navigate(['/Scheme/All']);
      },
       error =>{
         console.log(error)
         this.alertifyService.error("Sommething Wrong!")
       }
      )
    }else {
      this.meetingService.AddeMeeting(this.meetingForm.value).subscribe( response => {
        console.log(response)
        this.alertifyService.success("Added Succesfully")
        })

    }

 
    this.dialogRef.close();

  }

  onDecline() {

    this.dialogRef.close();
  }

}
