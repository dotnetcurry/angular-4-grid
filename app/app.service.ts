//1. Import all dependencies
import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Employee} from './employee.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
//2. The service class
@Injectable()
export class EmployeeService {
    //3. The local private variable for  storing the URL of the REST API
private servUrl = "http://localhost:8020/EmployeeList/api/employees";
//4. Passsing the Http dependency to the constructor to access Http functions
    constructor(private http:Http) { }

//5. Function to return the Observable response containing all Employees
    getEmployees(): Observable < Response >{
        return this.http.get(this.servUrl);
    }
    //6. Function to perform POST operation to create a new employee
    addEmployee(emp : Employee) : Observable < Response > {
        let header = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: header});
       return this
            .http
            .post(this.servUrl, JSON.stringify(emp), options)
    }
//7. Function to update Employee using PUT operation
    updateEmployee(id:string,emp : Employee) : Observable < Response > {
        let header = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: header});
       return this
            .http
            .put(this.servUrl+`/`+id, JSON.stringify(emp), options)
    }
    //8. Function to remove the Employee using DELETE operation
    deleteEmployee(id:string) : Observable < Response > {
       return this
            .http
            .delete(this.servUrl+`/`+id)
    }
}