import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  contactMe(): void {
    const url = "mailto:daianaem.12@gmail.com";
    window.open(url, "_blank");
  }
}
