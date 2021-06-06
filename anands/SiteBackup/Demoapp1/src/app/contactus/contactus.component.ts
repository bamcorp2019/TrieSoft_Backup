import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactUsModel } from './Models/ContactUsModel';
import { ContactUsService } from './Services/ContactUsService';
import { map } from "rxjs/operators";
import {MatCardModule} from '@angular/material/card';


import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contacts',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  private contactusservice;
  contactusmodel: ContactUsModel = new ContactUsModel();
  message:string = "";

  
  constructor(contactusservice: ContactUsService,private snackBar: MatSnackBar) {
    this.contactusservice = contactusservice;

   }

   
   actionButtonLabel: string = 'Retry';
   action: boolean = true;
   setAutoHide: boolean = true;
   autoHide: number = 5000;
   horizontalPosition: MatSnackBarHorizontalPosition = 'center';
   verticalPosition: MatSnackBarVerticalPosition = 'bottom';
   addExtraClass: boolean = false;
   ngOnInit(): void {
    this.message = "";
    this.contactusservice.GetUserDetails().subscribe(
      response => 
      {     
          if (response.token != null) 
          {
            
          }
      });
}

numberOnly(event): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;

}

onSubmit() 
    {
       this.contactusservice.SendUserDetails(this.contactusmodel).subscribe(
        response => 
        {     
            if (response.status_code ==0) 
            {
              this.message="Thank You! We will contact you shortly..";
            }
        });
    }
}
