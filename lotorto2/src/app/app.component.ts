import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringhe = new Array<string>();
  spammer(stringa: HTMLInputElement, numero: HTMLInputElement): boolean {
    let cont = Number(numero.value);
    for(let i:number =0; i< cont; i++) 
    {
      this.stringhe.push(i + " " + stringa.value);
    }
  return false 
  }
}
