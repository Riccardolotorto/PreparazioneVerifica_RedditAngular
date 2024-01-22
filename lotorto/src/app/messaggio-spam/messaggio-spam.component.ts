import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messaggio-spam',
  templateUrl: './messaggio-spam.component.html',
  styleUrls: ['./messaggio-spam.component.css']
})
export class MessaggioSpamComponent implements OnInit {
  @Input() messaggio: string;
  constructor() {

  }
  ngOnInit(): void {
    
  }
}
