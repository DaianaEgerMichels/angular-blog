import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit {

  text = "Daiana Eger Michels";
  result: HTMLElement | null = null;

  count = 0;

  ngOnInit() {
    this.toType();
  }

  // Insert letters one by one
  toType() {
    this.result = document.getElementById("title");
    if (this.result) {
      setTimeout(() => this.insert(this.text[this.count]), 200);
    }
  }
  insert(letter: string) {
    if (this.result) {
      this.result.innerHTML += letter;
      this.count++;
      if (this.count < this.text.length) {
        setTimeout(() => this.insert(this.text[this.count]), 200);
      }
    }
  }
}
