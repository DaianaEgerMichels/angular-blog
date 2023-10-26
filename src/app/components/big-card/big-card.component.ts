import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent  implements OnInit {

  @Input()
  cardLabel:string = "";

  @Input()
  cardTitle:string = "";

  @Input()
  cardDescription:string = "";

  constructor() { }
  ngOnInit(): void {
    
  }

  about(): void {
    window.open("https://daiana-eger-michels-portfolio.netlify.app/", "_blank");
  }

  contact(): void {
    window.open("mailto:daianaem.12@gmail.com", "_blank");
  }

}
