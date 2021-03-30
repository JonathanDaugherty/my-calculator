import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-calculator';
  n: number = 0;
  m: number = 0;
  ans: number = 0;
  x: number = 0;
  y: number = 0;
  ans2: number = 0;
  a: number = 0;
  b: number = 0;
  ans3: number = 0;
  j: number = 0;
  k: number = 0;
  ans4: number = 0;
  
  add(): void {
    this.ans = this.n + this.m;
  }
  subtract(): void {
    this.ans2 = this.x - this.y;
  }
  multiply(): void {
    this.ans3 = this.a * this.b;
  }
  divide(): void {
    this.ans4 = this.j / this.k;
  }
}


