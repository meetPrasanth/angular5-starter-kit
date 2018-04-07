import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const ROUTES: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children : [
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule'
            },{
                path: '',
                loadChildren: './home/home.module#HomeModule'
            }
        ]
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
  declarations: [PagesComponent]
})
export class PagesModule { }
