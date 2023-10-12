import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit {

  text = "Daiana Eger Michels";
  title: HTMLElement | null = null;

  count = 0;

  ngOnInit() {
    this.toType();
  }

  // Insert letters one by one
  toType() {
    this.title = document.getElementById("title");
    if (this.title) {
      setTimeout(() => this.insert(this.text[this.count]), 200);
    }
  }
  insert(letter: string) {
    if (this.title) {
      this.title.innerHTML += letter;
      this.count++;
      if (this.count < this.text.length) {
        setTimeout(() => this.insert(this.text[this.count]), 200);
      }
    }
  }
}
