import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students:{name:string, age:number}[] = [];

  title = 'Day2';

  addStudent(data){
    this.students.push(data);
  }
}
