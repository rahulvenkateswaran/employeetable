import { EmpAddComponent } from './emp-add/emp-add.component';
import { NgModule } from '@angular/core';
import{LoginComponent} from '../login/login.component'
import { RouterModule, Routes } from '@angular/router';


import { CommonModule } from '@angular/common';
//import { HomeRoutingModule } from './home-routing.module';
//import{LoginComponent}from'./login/login.component'

//import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
//import { EmpAddComponent } from './emp-add/emp-add.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatNativeDateModule} from'@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { HomeRoutingModule } from './homerouting.module';
import { MatDatepicker } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {Component} from '@angular/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';




import {provideNativeDateAdapter} from '@angular/material/core';
import { InfoComponent } from '../info/info.component';








@NgModule({
  declarations: [
    HomeComponent,

    EmpAddComponent,
    InfoComponent







  ],
  imports: [
    //BrowserModule ,
   // AppRoutingModule,

    //BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginator,
    MatSortModule,
    RouterModule,
    MatDatepicker,

    CommonModule,
    //HomeRoutingModule
    HomeRoutingModule,
    MatSnackBarModule




  ],
  providers: [provideNativeDateAdapter()],
  bootstrap: [HomeComponent]
})

export class HomeModule { }
