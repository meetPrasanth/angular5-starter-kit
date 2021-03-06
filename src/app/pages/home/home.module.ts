import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
    { 
        path: '',
        component: HomeComponent
    },{
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
