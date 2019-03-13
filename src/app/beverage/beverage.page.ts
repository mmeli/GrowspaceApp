import { Component} from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.page.html',
  styleUrls: ['./beverage.page.scss'],
})
export class BeveragePage  {
  public tea: string;
  public coffee: string;
  public water:string;

  key5:string = 'tea';
  key6:string = 'coffee';
  key7:string = 'water';

  constructor(public storage: Storage, public router: Router) { }

  doneBeverage(){
    this.storage.set(this.key5,this.tea);
    this.storage.set(this.key6,this.coffee);
    this.storage.set(this.key7,this.water);

    this.router.navigate(['welcome']);
  }

}
