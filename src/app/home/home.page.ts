import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data:any;
  data1:any;
  data2:any;
  bdata:any;
  bdata1:any;
  bdata2:any;
constructor(public storage: Storage){}
ngOnInit() {
  // this.data = this.storage.clear();
  // this.data1 = this.storage.clear();
  // this.data2 = this.storage.clear();
  // this.bdata = this.storage.clear();
  // this.bdata1 = this.storage.clear();
  // this.bdata2 = this.storage.clear();
  
  }
}
