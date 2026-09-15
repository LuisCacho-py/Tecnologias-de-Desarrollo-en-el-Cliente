import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-derecho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-derecho.component.html',
  styleUrl: './panel-derecho.component.css'
})
export class PanelDerechoComponent {
  @Input() tituloSeleccionado: string | null = null;
  @Output() limpiarSeleccion = new EventEmitter<void>();

  limpiar(): void {
    this.limpiarSeleccion.emit();
  }
}
