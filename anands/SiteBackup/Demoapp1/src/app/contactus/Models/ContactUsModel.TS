export class ContactUsModel
{
    public UserName: string = "";
    public UserEmail: string = "";
    public UserCountry: string = "";
    public UserMobileNumber: string = "";
    public UserCompanyName: string = "";
    public UserInterestedIn: string = "";
    public message: string = "";
    Countries = [
        new Countries(1, 'India'),
        new Countries(13, 'Qatar'),
        new Countries(15, 'Unites State'),
        new Countries(20, 'Sri Lanka')
      ];
      Apps=[
        new Apps(1, 'Enteriprise chat/boat'),
        new Apps(2, 'Notification Management'),
        new Apps(3, 'HRMS')        
      ];
}
export class Countries
{
    
        constructor(
          public id: number,
          public Country: string) { }
      
}

export class Apps
{
    
        constructor(
          public id: number,
          public AppName: string) { }
      
}