import { Component, OnInit } from '@angular/core';

import{ hourHand,minuteHand,secondHand } from './clock'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[hourHand,minuteHand,secondHand]
})
export class HomeComponent implements OnInit {

  constructor() { }

  // hour:string
  // minute:string
  // second:string

  ngOnInit() {
    // let time=new Date()
    // this.hour=`rotate(${(time.getHours()+time.getMinutes()/60+time.getSeconds()/3600)/12*360}deg)`
    // this.minute=`rotate(${(time.getMinutes()+time.getSeconds()/60)/60*360}deg)`
    // this.second=`rotate(${time.getSeconds()/60*360}deg)`
  }

}
