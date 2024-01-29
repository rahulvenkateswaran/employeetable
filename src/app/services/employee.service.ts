import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class EmployeeService {

  constructor(private _http: HttpClient) { }
  addEmployee(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/employee',data)

  }



  updateEmployee(employeeName:string,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/employee/${employeeName}`,data)

  }



    getEmployeeList():Observable<any>{
      return this._http.get('http://localhost:3000/employee')

    }







    deleteEmployee(employeeName:string):Observable<any>{
      return this._http.delete(`http://localhost:3000/employee/${employeeName}`)


    }

    // deleteEmployee(data:any):Observable<any>{
    //   return this._http.delete(`http://localhost:3000/employee`,data)


    // }



    }


