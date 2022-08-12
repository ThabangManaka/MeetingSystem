import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meeting-item-form',
  templateUrl: './meeting-item-form.component.html',
  styleUrls: ['./meeting-item-form.component.scss']
})
export class MeetingItemFormComponent implements OnInit {

  _productForm: FormGroup;
  message: string = "Product Details";
  private _formBuilder: any;
  constructor() { }

  ngOnInit(): void {

    this._productForm = this._formBuilder.group({

     itemName: [ '', [Validators.required]],
      comments: [ '', [Validators.required]],
      status: [ '', [Validators.required]],
      action: [ '', [Validators.required]],

   });
  }
  save(employee : any) {
    console.log(employee)
   }

   onSubmit() {

   }

   onDecline(){

   }
}
