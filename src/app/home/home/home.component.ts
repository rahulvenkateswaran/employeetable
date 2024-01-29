//import { EmployeeService } from './../../services/employee.service';
import { EmployeeService } from '../../services/employee.service';
import { HomeModule } from '../home.module';
import { EmpAddComponent } from '../emp-add/emp-add.component';
import { Component,OnInit,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { EmpAddComponent } from './emp-add/emp-add.component';
//import { EmployeeService } from './services/employee.service';
//import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator'
import { HomeRoutingModule } from '../homerouting.module';
import { CoreService } from '../../core/core.service';
import { LoginComponent } from '../../login/login.component';
import { InfoComponent } from '../../info/info.component';
console.log('home component loaded')
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  title='employeeTable'


  displayedColumns: string[] = ['employeeName', 'dateOfBirth', 'contactNumber', 'Address','action','details'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort

  //  messagedata:any=''


  constructor(private _dialog: MatDialog,private _empService:EmployeeService,private _coreservice:CoreService){}
  ngOnInit(): void {
    this.getEmployeeList()
  }


  // openDetailsDialog(displayedColumns:any):void{
  //   const dialogRef=this._dialog.open(EmpAddComponent,{
  //     data:{displayedColumns}
  //   })
  // }


  openAddEmpForm(){
    const dialogRef=this._dialog.open(EmpAddComponent)
    dialogRef.afterClosed().subscribe({next:(val)=>{
        if(val){
          this.getEmployeeList()
        }


      },
      // error:(err)=>{
      //   console.error(err)
      // }

    })

  }

    getEmployeeList(){
      this._empService.getEmployeeList().subscribe({next: (res)=>{
          this.dataSource=new MatTableDataSource(res)
          this.dataSource.sort=this.sort
          this.dataSource.paginator=this.paginator
        },

        error:(err)=>{
          console.error(err)
        }
      })

  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(employeeName:string):void{
    this._empService.deleteEmployee(employeeName).subscribe({
      next: (res)=>{
// alert('Employee Deleted')
this._coreservice.openSnackBar('Employee deleted!','done')
this.getEmployeeList()
      },
      error: console.log

      })
    }

    openEditEmpForm(data:any){
      const dialogRef=this._dialog.open(EmpAddComponent,{
        data:data
      })

        dialogRef.afterClosed().subscribe({next:(val)=>{
          if(val){
            this.getEmployeeList()
          }


        },
        // error:(err)=>{
        //   console.error(err)
        // }

      })



    }
    openinfo(data:any){
      this._dialog.open(InfoComponent,{
        width:'400px',
        data:data
      })
    }














  }
