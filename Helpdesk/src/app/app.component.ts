import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  subject!:string;
  categeory!:string;
  description!:string;
  Priority!:string;
  Empid!:string;
  onbehalf!:boolean;
  disabled:boolean=true;
  constructor(){
   
  }
  onSubmit(t:any){
    console.log(this.categeory,this.subject,this.Empid,this.Priority,this.onbehalf,this.description)
  }
  textchange(val:any){
    if(this.onbehalf==true){
      this.disabled=false
      console.log(val.controls['Empid'].disabled)
    }
    else if(this.onbehalf==false){
      this.disabled=true
    }
  }
}
