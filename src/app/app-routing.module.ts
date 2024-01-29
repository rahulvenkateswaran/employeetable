import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home/homerouting.module';
import { HomeComponent } from './home/home/home.component';
import { EmpAddComponent } from './home/emp-add/emp-add.component';




const routes: Routes = [
  {path:'',component:LoginComponent},
     {path:'home',loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  //{path:'home',component:HomeComponent},
 // {path:'home/empadd',component:EmpAddComponent}
//  {path:'home',component:EmpAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
