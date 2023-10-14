import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.css']
})
export class MenuFooterComponent {

  contactMe(): void {
    const url = "https://wa.me/5548998136262";
    window.open(url, "_blank");
  }
}
