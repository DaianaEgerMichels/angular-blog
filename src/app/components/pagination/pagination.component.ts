import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalItems!: number;
  @Input() itemsPerPage!: number;
  @Output() pageChange = new EventEmitter<number>();

  currentPage: number = 1;
  pagesArray: number[] = [];

  ngOnChanges() {
    this.updatePagesArray();
  }

  // Método para ir para a página anterior
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  // Método para ir para a próxima página
  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  // Método para atualizar o array de números de página
  updatePagesArray() {
    this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
}


