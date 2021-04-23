import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { LoginComponent } from './components/Day3/login/login.component';
import { HomeComponent } from './components/Day3/home/home.component';
import { EmployeesComponent } from './components/Day4/employees/employees.component';
import { EmployeeDetailsComponent } from './components/Day4/employee-details/employee-details.component';
import { AboutComponent } from './components/Day4/about/about.component';
import { ErrorComponent } from './components/Day4/error/error.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [
  {path:"", component:EmployeesComponent},
  {path:"employees", component:EmployeesComponent},
  {path:"employees/:id", component:EmployeeDetailsComponent},
  {path:"about", component:AboutComponent},
  {path:"**", component:ErrorComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    LoginComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    AboutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
