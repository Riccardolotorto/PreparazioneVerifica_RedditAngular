import { Component ,Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nuovo',
  templateUrl: './nuovo.component.html',
  styleUrls: ['./nuovo.component.css']
})
export class NuovoComponent implements OnInit{
  @Input() mess: string;
  constructor() {

  }
  ngOnInit(): void {
    
  }
}
