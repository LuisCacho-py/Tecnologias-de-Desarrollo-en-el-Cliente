import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Movie } from '../../shared/models/movie.model';
import { MovieService } from '../../shared/services/movie.service';
import { FavoritesService } from '../../shared/services/favorites.service';
import { ImageFallbackDirective } from '../../shared/directives/image-fallback.directive';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ImageFallbackDirective],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;
  movieId!: number;
  isFavorite: boolean = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService,
    private readonly favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.movieId = Number(idParam);
        this.movie = this.movieService.getMovieById(this.movieId);
        this.checkFavoriteStatus();
      }
    });

    // Escuchar cambios reactivos en la lista de favoritos
    this.favoritesService.favorites$.subscribe(() => {
      this.checkFavoriteStatus();
    });
  }

  checkFavoriteStatus(): void {
    if (this.movie) {
      this.isFavorite = this.favoritesService.isFavorite(this.movie.id);
    }
  }

  toggleFavorite(): void {
    if (this.movie) {
      this.isFavorite = this.favoritesService.toggleFavorite(this.movie);
    }
  }
}
