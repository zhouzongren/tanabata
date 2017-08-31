import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRouting } from './pages-routing.module';
import {PagesComponent} from "./pages.component";
// import { MessageComponent } from './message/message.component';
// import { PicturesComponent } from './pictures/pictures.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRouting
  ],
  declarations: [PagesComponent,]
})
export class PagesModule { }
