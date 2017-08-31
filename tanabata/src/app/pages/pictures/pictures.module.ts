import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicturesRoutingModule } from './pictures-routing.module';
import {PicturesComponent} from "./pictures.component";

@NgModule({
  imports: [
    CommonModule,
    PicturesRoutingModule
  ],
  declarations: [PicturesComponent]
})
export class PicturesModule { }
