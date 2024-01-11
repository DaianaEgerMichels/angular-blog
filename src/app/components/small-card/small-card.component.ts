import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  cardAuthor:string = "Daiana Michels • 25/10/2023";
  @Input()
  cardTitle:string = "Application Developer";
  @Input()
  cardDescription:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!";
  @Input()
  buttons: string[] = [];

  @Input()
  idItem: number = 0;

  @Input()
  repo: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  goToDetails(idItem: number) {
    this.router.navigate(['/details', idItem]);
  }

}
