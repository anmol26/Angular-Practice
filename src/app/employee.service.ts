import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return  [
      {"id":1, "name": "Anmol", "age":30 },
      {"id":2, "name": "Vaibhav", "age":35 },
      {"id":3, "name": "Abhishek", "age":28 },
      {"id":4, "name": "Ritu", "age":26 },
    ];
  }
}
