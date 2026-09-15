import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelIzquierdoComponent } from '../panel-izquierdo/panel-izquierdo.component';
import { PanelDerechoComponent } from '../panel-derecho/panel-derecho.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [CommonModule, PanelIzquierdoComponent, PanelDerechoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  // El padre actúa como mediador entre los dos hijos
  tituloSeleccionado: string | null = null;

  /**
   * Recibe la selección emitida por el panel izquierdo
   * y la pasa al panel derecho mediante @Input()
   */
  onTituloElegido(titulo: string): void {
    this.tituloSeleccionado = titulo;
  }

  /**
   * Recibe el evento de limpiar del panel derecho
   * y elimina la selección en ambos paneles
   */
  onLimpiarSeleccion(): void {
    this.tituloSeleccionado = null;
  }
}
