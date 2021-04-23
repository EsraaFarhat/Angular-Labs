import { Component } from "@angular/core";


@Component({
    selector: "app-first",
    templateUrl: "./first.component.html",
    styleUrls: ["./first.component.css"]
})

export class FirstComponent{
    name:string="";

    inputChange(){
        this.name = "Default value";
    }
}