import { Component } from '@angular/core';

@Component({
  //selector: 'my-app',
  //templateUrl: './app.component.html',
  //styleUrls: [ './app.component.css' ]
  selector: 'my-app',
  template: `
  //7.Interpolation one way data binding
<h1>Hello {{name}} </h1>
<h2>{{1+4}}</h2>
<h2>{{"Hi " + name }}
<h2>{{name.length}}</h2>
<h2>{{name.toUpperCase()}}</h2>
<h3>{{welcomeMessage()}}</h3>
<h4>{{a}}</h4>

//8.single inline style binding
<br/><br/>
<button style='color:red;background-color:yellow;' [style.font-size.px]="butttonTextSize" [style.font-weight]="applyBold">Submit</button>
<br/><br/>

//9.Property data binding
<br/><br/>
<input bind-id="myId" type="text" value="pp"/>
<br/><br/>

//10.Multiple inline style binding
<br/><br/>
<button style='color:red' [ngStyle]="applyStyles()">Multiple inline styling</button>
<br/><br/>

//11.Class binding
<button class="colorStyleClass" [style.font-size.px]="butttonTextSize" [class.boldStyleClass]='applyBoldStyleClass'>Button1</button>
<br/><br/>
<button class="colorStyleClass" [style.font-size.px]="butttonTextSize" [class.boldStyleClass]='!applyBoldStyleClass'>Button2</button>
<br/><br/>
<button class="colorStyleClass" [style.font-size.px]="butttonTextSize" [class.boldStyleClass]='applyBoldStyleClass' [class.variantStyleClass]='applyVariantStyleClass'>Button3</button>
<br/><br/>
<button class="colorStyleClass" [style.font-size.px]=20 [class]='classesToApply'>button4</button>
<br/><br/>

//12.Multiple class binding
<button class="colorStyleClass" [style.font-size.px]=20 [ngClass]='addStyleClasses()'>Bold + oblique + bariant</button>
 <br/><br/>

 //13.Event Binding 
 <br/><br/>
 <button (click)='onClick()'>Click</button>
 {{message}}
 <br/><br/>

 //14.Two way data binding
 <br/><br/>
 <input type="text" [(ngModel)]="name">
 {{name}}
 <br/><br/>

 //15.-16.Nested Component
 <my-student></my-student>
 <br/><br/>

 //17.structural directives - ngFor
 <div *ngFor="let name of names; index as i">
 <h3>{{i}} {{name}}</h3>
 </div>
 <br/><br/>

 //18.structural directives - ngSwitch
 <div [ngSwitch]="fruit">
  <div *ngSwitchCase="'orange'">You like orange fruit</div>
  <div *ngSwitchCase="'apple'">You like apple fruit</div>
  <div *ngSwitchCase="'mango'">You like mango fruit</div>
  <div *ngSwitchDefault>Select Agian</div>
 </div> 
 <br/><br/>

 //19.structural directives - ngIf
 <button (click)="toggleSwitch()">Bulb</button>
 <div *ngIf="switch;then switchOn else switchOff"></div>
 <ng-template #switchOn>bulb is switched on</ng-template>
 <ng-template #switchOff>bulb is switch off</ng-template>
 <br/><br/>

 //20.Angular Pipes
 <h1>{{name | uppercase}}</h1>
 <h2>{{dob | date:'fullDate' |uppercase}}</h2>
 <h2>{{dob | date:'MM/dd/yyy'}}
 <h2>{{amount|currency:'USD':'symbol'}}</h2>
 <h2>{{percentage|percent}}</h2>
 <h2>{{percentage|percent:'1.2-2'}}</h2>

 //21.Paraent child component interaction
`,
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  public name: string = 'pp';
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
  public names=["pp","kk","mm","jj"];
  public fruit="banana";

  public switch: boolean=true;
  toggleSwitch(){
    this.switch=!this.switch;
  }
  public dob:string="07/12/2022";
  public amount:number=100.4567;
  public percentage : number=0.259;

  
}
