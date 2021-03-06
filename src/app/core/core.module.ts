import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [ HttpService ]
})
export class CoreModule { }
