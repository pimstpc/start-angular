import { Component } from '@angular/core';

@Component({
  //selector: 'my-app',
  //templateUrl: './app.component.html',
  //styleUrls: [ './app.component.css' ]
  selector: 'my-app',
  template: `
<h1>Hello {{name}} </h1>
<h2>{{1+4}}</h2>
<h2>{{"Hi " + name }}
<h2>{{name.length}}</h2>
<h2>{{name.toUpperCase()}}</h2>
<h3>{{welcomeMessage()}}</h3>
<h4>{{a}}</h4>
<button style='color:red;background-color:yellow;' [style.font-size.px]="butttonTextSize" [style.font-weight]="applyBold">Submit</button>
<br/><br/>
<input bind-id="myId" type="text" value="pp"/>
<br/><br/>
<button style='color:red' [ngStyle]="applyStyles()">Multiple inline styling</button>
<br/><br/>
<button class="colorStyleClass" [style.font-size.px]="butttonTextSize" [class.boldStyleClass]='applyBoldStyleClass'>Button1</button>
<br/><br/>
<button class="colorStyleClass" [style.font-size.px]="butttonTextSize" [class.boldStyleClass]='!applyBoldStyleClass'>Button2</button>
<br/><br/>
<button class="colorStyleClass" [style.font-size.px]="butttonTextSize" [class.boldStyleClass]='applyBoldStyleClass' [class.variantStyleClass]='applyVariantStyleClass'>Button3</button>
<br/><br/>
<button class="colorStyleClass" [style.font-size.px]=20 [class]='classesToApply'>button4</button>
<br/><br/>
<button class="colorStyleClass" [style.font-size.px]=20 [ngClass]='addStyleClasses()'>Bold + oblique + bariant</button>
 <br/><br/>
 <button (click)='onClick()'>Click</button>
 {{message}}
 <br/><br/>
 <input type="text" [(ngModel)]="name">
 {{name}}
`,
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  name: string = 'pp';
  a : number = 2+4;
  butttonTextSize:number=20;
  applyBold:string='bold';
  applyBoldStyleClass:boolean=false;
  applyObliqueStyleClass:boolean=true;
  applyVariantStyleClass:boolean=true;
  classesToApply:string='boldStyleClass obliqueStyleClass variantStyleClass';
  public welcomeMessage() {
    return 'Dear User ' + this.name;
  }
  public myId="testId";
  applyStyles(){
    var myStyles ={
'font-size.px':this.butttonTextSize,
'font-weight':this.applyBold,
    };
    return myStyles
  }
  addStyleClasses(){
    var classes={
      boldStyleClass:this.applyBoldStyleClass,
      obliqueStyleClass:this.applyObliqueStyleClass,
      variantStyleClass:this.applyVariantStyleClass
    };
    return classes;
  }
  public message="";

  public onClick():void{
    console.log('Button has been clicked');
    this.message='Welcome to angular';
  }
}
