import { Component ,OnInit,Input, Inject, inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
//  import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpAddComponent } from '../home/emp-add/emp-add.component';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {
  constructor(private _fb:FormBuilder,private _empService:EmployeeService,private _diaogRef: MatDialogRef <EmpAddComponent>,
    @Inject(MAT_DIALOG_DATA)public defaults :any){
    }
    empForm:FormGroup | undefined;

  ngOnInit(): void {


    this.empForm=this._fb.group({

      employeeName:[''||this.defaults,[Validators.required,Validators.minLength(3),Validators.pattern("[A-Za-z]*")]],
      dateOfBirth:[''||this.defaults,[Validators.required]],
      contactNumber:[''||this.defaults,[Validators.required,Validators.pattern("[0-9 ]{10}")]],
      Address:[''||this.defaults,[Validators.required]]
      // employeeName:'',
      // dateOfBirth:'',
      // contactNumber:'',
      // Address:''

    })
}
  }






