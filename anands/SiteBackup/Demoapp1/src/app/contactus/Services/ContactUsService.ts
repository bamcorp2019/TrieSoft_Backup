import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ContactUsModel } from '../Models/ContactUsModel';
import { Router } from '@angular/router';
import{environment} from '../../../environments/environment';
import { map } from "rxjs/operators"; 




@Injectable({
    providedIn: 'root'
})

export class ContactUsService {
   
    constructor(private _http: HttpClient, private _Route: Router)
    {

    }
    private apiUrl = "http://3.19.209.78:3000/request/";
    durationInSeconds = 20;

  public SendUserDetails(contactusmodel: ContactUsModel)
  {
      let dataToken=localStorage.getItem('currentActiveID');
      console.log("cacheid"+dataToken);
    let requestSet =new RequestSet();
    requestSet.demo_request.name=contactusmodel.UserName;
    requestSet.demo_request.email=contactusmodel.UserEmail;
    requestSet.demo_request.country=contactusmodel.UserCountry;
    requestSet.demo_request.ph_number=contactusmodel.UserMobileNumber;
    requestSet.demo_request.product_name=contactusmodel.UserInterestedIn;
    requestSet.demo_request.request_type="demo/contact us";
    requestSet.demo_request.company_name=contactusmodel.UserCompanyName;
    requestSet.demo_request.token=dataToken;
    let headers1 = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(JSON.stringify(requestSet));
    return this._http.post<any>(this.apiUrl, JSON.stringify(requestSet), { headers: headers1 })
    .pipe(tap(data =>
    {
        console.log(data);

        if (data.status_code != null)
        {
            return data;
        } else {
            return null;
        }
    }),
        catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
    } else {
        console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
};

public GetUserDetails()
  {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this._http.get<any>('http://3.19.209.78:3000/get_token?secureid=77340e2ad3b8c3e84a5803ad533d700050089e9c', { headers: headers })
          .pipe(tap(data =>
          {
              console.log(data);

              if (data.token != null)
              {
                localStorage.setItem('currentActiveID', data.token );
                return data;
              } else {
                  return null;
              }
          }),
              catchError(this.handleError)
          );
  }



}

export class ResultSet
{
    public status: string = "";
    public token: string = "";
}
export class RequestSet
{
    public demo_request: CustomerData = new CustomerData();
   
}

export class CustomerData{
    public name: string = "";
    public email: string = "";
    public company_name: string = "";
    public country: string = "";
    public ph_number: string = "";
    public product_name: string = "";
    public request_type: string = "";
    public token: string = "";
}