import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
  {{"Employee Details:- "}}
  </h2>
  <div *ngFor="let employee of employees">
  <h3>{{employee.id}} - {{employee.name}} + {{employee.age}}</h3>
  </div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public employees= [
    {"id":1, "name": "Anmol", "age":30 },
    {"id":2, "name": "Vaibhav", "age":35 },
    {"id":3, "name": "Abhishek", "age":28 },
    {"id":4, "name": "Ritu", "age":26 },
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
