import { Component,AfterContentInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'angular-fresh';
   values:string[] =["Apple","Boy","Cat" ]
  constructor(){
    console.log("Parent component is constructed")
  }

  ngOnInit() {
    console.log("Parent component is initialized")
  }
  changeData(){
     let values=["Apple","Boy","Cat","Dog","Elephant","Fox","Gun","Hen","Ink"]
     this.values[0]=values[Math.round(Math.random()*8)]
     this.values[1]=values[Math.round(Math.random()*8)]
     this.values[2]=values[Math.round(Math.random()*8)]
  }

  ngAfterContentInit(){
    console.log("parent content initialized")
  }
  ngAfterViewInit(){
    console.log("Parent component is completely ready -child attached")
  }

  ngAfterViewChecked(){
    console.log("new View is ready")
  }
}
