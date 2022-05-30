import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    `
    <p>hi {{ title }}</p>
    <button (click)="onClick()">Greet</button>
    {{greeting}}

    <div *ngIf="displayName; then thenBlock; else elseBlock">
    </div>
    <ng-template #thenBlock>
    <h2>
      hi Anmol Khandelwal
    </h2>
    </ng-template>
    <ng-template #elseBlock>
    <h2>
      Hi Vaibhav Khandelwal
    </h2>
    </ng-template>

    <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked red.</div>
    <div *ngSwitchCase="'blue'">You picked blue.</div>
    <div *ngSwitchCase="'black'">You picked black.</div>
    <div *ngSwitchDefault>You picked wrong.</div>
    </div>

    <div *ngFor="let c of colors; first as f">
    <h2>{{f}} {{c}}</h2>
    </div>

    <app-test></app-test>
    `
    ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anmol';
  greeting= "";
  displayName= false;
  color="black";
  colors=['red','yellow','green'];

  onClick(){
    console.log("Hi Anmol");
    this.greeting= "Hello Anmol, Welcome to our show";
  }
}
