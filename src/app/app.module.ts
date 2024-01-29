import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';


//import { EmpAddComponent } from './home/emp-add/emp-add.component';




// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';
// import{MatButtonModule}from '@angular/material/button';
// import{MatDialogModule}from '@angular/material/dialog'
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatNativeDateModule} from'@angular/material/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import {MatTableModule} from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import { LoginModule } from './login/login.module';
//import { HomeComponent } from './home/home.component';
//import { EmployeetableComponent } from './employeetable/employeetable.component';
import { MatTableDataSource } from '@angular/material/table';
// import { InfoComponent } from './home/info/info.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    //EmpAddComponent,







  ],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatDatepickerModule
  //  LoginModule,
  //LoginModule,
    // BrowserAnimationsModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,
    // MatDialogModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,

   // BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

