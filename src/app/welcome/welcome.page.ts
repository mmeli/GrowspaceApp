import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SMS } from '@ionic-native/sms/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

var smsNumber: Number;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit  {
   data:any;
   data1:any;
   data2:any;
   bdata:any;
   bdata1:any;
   bdata2:any;
  constructor(public route:ActivatedRoute, public storage: Storage, public router : Router, public sms:SMS, private emailComposer: EmailComposer, public androidPermissions: AndroidPermissions) { 


  }

  ngOnInit(){
 
      Promise.all([

      this.storage.get('fullName').then((d)=>{this.data=d;}),
      this.storage.get('phone').then((d1)=>{this.data1=d1;}),
      this.storage.get('email').then((d2)=>{this.data2=d2;}),

      this.storage.get('tea').then((bd)=>{this.bdata=bd;}),
      this.storage.get('coffee').then((bd1)=>{this.bdata1=bd1;}),
      this.storage.get('tea').then((bd2)=>{this.bdata2=bd2;})

    ]);
      
      console.log(this.data.toString()); 
      console.log(this.data1.toString()); 
      console.log(this.data2.toString()); 

  }



sendSMSTO(){
  var options={
    replaceLineBreaks: false,
    android: {
      intent:'INTENT'
    }
};
    //var messageInfo = { phoneNumber: '0760837038', textMessage:'Welcome to Growspace, wifi: Growspace and password: g12343'};
  
  this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(()=>{
    this.sms.send(this.data1, 'Welcome to Growspace, wifi: Growspace and password: g12343',options);
    console.log('sms worked');
    alert(JSON.stringify('Message sent to:'+this.data1));
  }).catch((err)=>{
    alert(JSON.stringify(err));
  });
  this.router.navigate(['home']);
}



}
