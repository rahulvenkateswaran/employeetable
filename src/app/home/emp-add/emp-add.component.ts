import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { HomeComponent } from '../home/home.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CoreService } from '../../core/core.service';

//console.warn('empadd component loaded')
@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrl: './emp-add.component.scss'
})
export class EmpAddComponent implements OnInit {
empForm:FormGroup;

// row:any[]=[]

//  messagedata:any=this.onFormSubmit


constructor(private _fb:FormBuilder,private _empService:EmployeeService,private _diaogRef: MatDialogRef <EmpAddComponent>,
  @Inject(MAT_DIALOG_DATA)public data:any,private _coreservice: CoreService

  ){
    this.empForm=this._fb.group({

      employeeName:this._fb.control('',[Validators.required,Validators.minLength(3),Validators.pattern("[A-Za-z]*")]),
      dateOfBirth:this._fb.control('',Validators.required),
      contactNumber:this._fb.control('',[Validators.required,Validators.pattern("[0-9 ]{10}")]),
      Address:this._fb.control('',Validators.required),
      details:this._fb.control('',Validators.required)
      // employeeName:'',
      // dateOfBirth:'',
      // contactNumber:'',
      // Address:''

    })


    // messagedata:any=this._fb


  }

ngOnInit(): void {
  this.empForm.patchValue(this.data)
}

// openDetailsDialo(empFrom:any):void{
//   const dialogRef=this._diaogRef.open(HomeComponent,{
//     data:{empForm}
//   })
// }

onFormSubmit(){
  if(this.empForm.valid){
    if(this.data){
      this._empService.updateEmployee(this.data.employeeName,this.empForm.value).subscribe({
        next:(val: any)=>{

          // alert('Employee updated successfully')
          this._coreservice.openSnackBar('Employee updated successfully!','done')
          this._diaogRef.close(true)
        },
        error:(err)=>
        {

          console.error(err)
        }
      })

    }
    else{

      this._empService.addEmployee(this.empForm.value).subscribe({
        next:(val: any)=>{

          // alert('Employee added successfully')
          this._coreservice.openSnackBar('Employee added successfully!','done')
          this._diaogRef.close(true)
        },
        error:(err)=>
        {

          console.error(err)
        }
      })
    }
    }
}

}
