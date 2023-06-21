import { Component,Input,OnInit,OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
a:any;
@Input() data:any;
    constructor(){
      this.a="default value"
      console.log("Child constructed")
      console.log("in constructor",  this.data)
    }

    ngOnChanges():void{
          console.log("Child received new data", this.data)
    }
    ngOnInit():void{
      console.log("Child component is initialized")
      console.log("in on init of the child", this.data)
    }
   ngAfterContentInit(){
      console.log("child content initialized")
    }
    ngAfterViewInit(){
      console.log("child component is completely ready ")
    }
    
}
