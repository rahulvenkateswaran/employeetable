import { EmpAddComponent } from './emp-add/emp-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component'
import { LoginComponent } from '../login/login.component';
import { HomeModule } from './home.module';
import { InfoComponent } from '../info/info.component';



const routes: Routes = [

  {path:'emp',component:HomeComponent},
  {path:'emp',component:EmpAddComponent},
  // {path:'emp',component:InfoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
