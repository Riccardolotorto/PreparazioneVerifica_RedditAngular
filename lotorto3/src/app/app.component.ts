import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringhe = new Array<string>();
  ciclo(testo: HTMLInputElement, spam: HTMLInputElement): boolean {
    let cont = Number(spam.value);
    for(let i:number =0; i< cont; i++) 
    {
      this.stringhe.push(i + " " + testo.value);
    }
  return false 
  }
}
