import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stampante',
  templateUrl: './stampante.component.html',
  styleUrls: ['./stampante.component.css']
})
export class StampanteComponent implements OnInit{
  @Input() variabile: string;
  constructor() {

  }
  ngOnInit(): void {
    
  }
}
