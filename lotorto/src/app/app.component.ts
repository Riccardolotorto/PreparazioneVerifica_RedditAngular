import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>();
  spammer(title: HTMLInputElement, spam: HTMLInputElement): boolean {
    let cont = Number(spam.value);
    for(let i:number = 0; i < cont; i++)  
    {
      this.articles.push(title.value);
    }
  return false;
  }
}
