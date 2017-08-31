import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from "./pages.component";

const routes: Routes = [{
  path:'pages',
  component:PagesComponent,
  children:[{
    path:'',redirectTo:'home',pathMatch:'full'
  },{
    path:'home',loadChildren:'./home/home.module#HomeModule'
  },{
    path:'pictures',loadChildren:'./pictures/pictures.module#PicturesModule'
  },{
    path:'message',loadChildren:'./message/message.module#MessageModule'
  }]
}];

export  const PagesRouting: ModuleWithProviders = RouterModule.forChild(routes)
