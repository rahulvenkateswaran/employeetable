import { Component,OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddComponent } from './home/emp-add/emp-add.component';
import { EmployeeService } from './services/employee.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {


   title='employeeTable'
//   displayedColumns: string[] = ['employeeName', 'dateOfBirth', 'contactNumber', 'Address','action'];
//   dataSource!: MatTableDataSource<any>;

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort

//   constructor(private _dialog: MatDialog,private _empService:EmployeeService){}
//   ngOnInit(): void {
//     this.getEmployeeList()
//   }


//   openAddEmpForm(){
//     const dialogRef=this._dialog.open(EmpAddComponent)
//     dialogRef.afterClosed().subscribe({next:(val)=>{
//         if(val){
//           this.getEmployeeList()
//         }


//       },
//       // error:(err)=>{
//       //   console.error(err)
//       // }

//     })

//   }

//     getEmployeeList(){
//       this._empService.getEmployeeList().subscribe({next: (res)=>{
//           this.dataSource=new MatTableDataSource(res)
//           this.dataSource.sort=this.sort
//           this.dataSource.paginator=this.paginator
//         },

//         error:(err)=>{
//           console.error(err)
//         }
//       })

//   }


//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   deleteEmployee(employeeName:string):void{
//     this._empService.deleteEmployee(employeeName).subscribe({
//       next: (res)=>{
// alert('Employee Deleted')
// this.getEmployeeList()
//       },
//       error: console.log

//       })
//     }

//     openEditEmpForm(data:any){
//       const dialogRef=this._dialog.open(EmpAddComponent,{
//         data:data
//       })
//         dialogRef.afterClosed().subscribe({next:(val)=>{
//           if(val){
//             this.getEmployeeList()
//           }


//         },
//         // error:(err)=>{
//         //   console.error(err)
//         // }

//       })






//   }
}



