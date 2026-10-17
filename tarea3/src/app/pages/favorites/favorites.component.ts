import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../shared/models/movie.model';
import { FavoritesService } from '../../shared/services/favorites.service';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule, MovieCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favorites$!: Observable<Movie[]>;

  constructor(
    private readonly favoritesService: FavoritesService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    // Vinculación reactiva directa con el estado en memoria
    this.favorites$ = this.favoritesService.favorites$;
  }

  onRemoveFavorite(movie: Movie): void {
    this.favoritesService.removeFavorite(movie.id);
  }

  onClearAll(): void {
    if (confirm('¿Estás seguro de que deseas eliminar todas las películas de tu lista de favoritos?')) {
      this.favoritesService.clearFavorites();
    }
  }

  onSelectMovie(movie: Movie): void {
    this.router.navigate(['/movies', movie.id]);
  }
}
