import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular10_basic_advanced_practice2';
  display(){
   "Hello World , How are you?"
  }
  hello(){
    console.log(this.display());
  }
}
