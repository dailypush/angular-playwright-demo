import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-playwright-demo';
  displayText = 'Clicked it';
  counter = 0;

  showText() {
    this.displayText = 'angular-playwright-demo app is running!';
  }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
