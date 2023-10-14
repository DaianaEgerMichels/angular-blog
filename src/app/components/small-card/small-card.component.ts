import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = "../../../assets/me.jpg";
  @Input()
  photoAlt:string = "me";
  @Input()
  cardAuthor:string = "Daiana Michels • 14/10/2023";
  @Input()
  cardTitle:string = "Application Developer";
  @Input()
  cardDescription:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!";
  @Input()
  buttons: string[] = ["Read More", "Code"];

  constructor() { }

  ngOnInit(): void {
    
  }
}
