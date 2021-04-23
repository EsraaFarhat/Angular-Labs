import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit {

  employees:{name:string, age:number}[]=[];
  name:string = "";
  age:number= null;

  constructor() { }

  ngOnInit(): void {
  }

  Add(){
    let employee = {name: this.name, age:this.age};
    this.employees.push(employee);
    this.name = "";
    this.age = null;
    console.log(employee);

  }

}
