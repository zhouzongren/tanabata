import { Component, OnInit} from '@angular/core';
import {Location} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private location:Location
  ){

  }

  ngOnInit(): void {
      let located=this.location['_platformStrategy']['_platformLocation']['location']['hash'];
      this.pages.forEach(p=>{
        let re=new RegExp(p['name'],'i')
        p['active']=re.test(located)
      })
  }

  pages:object[]=[{
    name:'home',
    link:['pages/home'],
    active:false,
  },{
    name:'pictures',
    link:['pages/pictures'],
    active:false
  },{
    name:'message',
    link:['pages/message'],
    active:false
  }];
  isActive(name:string){
    this.pages.forEach(p=>{
      p['active'] = p['name'] == name;
    })
  }

}
