import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { ImageFallbackDirective } from '../../directives/image-fallback.directive';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterModule, ImageFallbackDirective],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input({ required: true }) movie!: Movie;
  @Input() isFavorite: boolean = false;
  @Input() showRemoveButton: boolean = false;

  @Output() toggleFavorite = new EventEmitter<Movie>();
  @Output() selectMovie = new EventEmitter<Movie>();

  onToggleFavorite(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.toggleFavorite.emit(this.movie);
  }

  onSelectMovie(): void {
    this.selectMovie.emit(this.movie);
  }
}
