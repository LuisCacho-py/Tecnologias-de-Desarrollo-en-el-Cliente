import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-izquierdo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-izquierdo.component.html',
  styleUrl: './panel-izquierdo.component.css'
})
export class PanelIzquierdoComponent {

  @Input() tituloSeleccionado: string | null = null;
  @Output() tituloElegido = new EventEmitter<string>();

  titulos: string[] = [
    'Cien años de soledad',
    'El señor de los anillos',
    'Harry Potter y la piedra filosofal',
    'Don Quijote de la Mancha',
    'El principito',
    'Crimen y castigo',
    '1984',
    'El gran Gatsby',
    'Matar a un ruiseñor',
    'Orgullo y prejuicio'
  ];

  seleccionar(titulo: string) {
    this.tituloElegido.emit(titulo);
  }

}
