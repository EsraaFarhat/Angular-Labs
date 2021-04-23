import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string;
  age:number;
  
  @Output() myEvent = new EventEmitter();

  constructor() { }
  
  
  ngOnInit(): void {
    
  }
  
  Add(){
    if(!this.name || !this.age) return;
    let student:{name:string, age:number} = {name: this.name, age: this.age};
    this.myEvent.emit(student);
    this.name="";
    this.age=null;
  }



}
