import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // stringInterpolation="Test string interpolation";

  // isDisable: boolean = true;

  // checkTheInput(param:string) {
  //   if(this.isDisable){
  //     this.isDisable=false;
  //   }
  //   else{
  //     this.isDisable=true;
  //   }

  //   console.log(param);
  // }

  twoWayBinding:string="";
}
