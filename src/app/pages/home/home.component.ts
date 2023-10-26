import { Component } from '@angular/core';
import { dataFake } from 'data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data = dataFake.smallCard;

  currentPage: number = 1; // Página atual
  itemsPerPage: number = 3; // Número de itens por página

  // Método para calcular o número total de páginas
  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  // Método para lidar com a mudança de página
  onPageChange(page: number): void {
    this.currentPage = page;
  }

   // Método para obter os itens a serem exibidos na página atual
   getItemsForPage(page: number, itemsPerPage: number): any[] {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }

}
