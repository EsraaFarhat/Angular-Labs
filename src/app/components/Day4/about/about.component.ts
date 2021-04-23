import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  employees:{name:string, age:number}[]=[];
  errors = [];
  success = false;
  flag=false;
  constructor() { }

  ngOnInit(): void {
  }
  

  ourValidation = new FormGroup({
    name: new FormControl("", Validators.required),
    age: new FormControl(null, [Validators.min(15), Validators.max(60), Validators.required]),
  })

  get Name(){
    return this.ourValidation.controls.name.valid;
  }

  get Age(){
    return this.ourValidation.controls.age.valid;
  }

  sub(){
    this.errors = [];
    this.success = false;
    if(!this.Name) this.errors.push("Name required");
    if (!this.Age) this.errors.push("Age required (15 < Age < 60)");
    else if(this.Name && this.Age){

      let employee = {name: this.ourValidation.controls.name.value, age:this.ourValidation.controls.age.value};
      
      this.employees.push(employee);
      this.success = true;
      this.flag = true;
    }
    console.log(this.ourValidation);
  }

}
