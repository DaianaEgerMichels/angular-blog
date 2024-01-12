import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'data/dataFake';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent  implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.data = dataFake.smallCard[params['id'] - 1];
    });
  }

  redirect(button: string): void {
    if (button === "Live") {
      window.open(this.data.live, "_blank");
    } else if (button === "Code") {
      window.open(this.data.repo, "_blank");
    }
  }

}
