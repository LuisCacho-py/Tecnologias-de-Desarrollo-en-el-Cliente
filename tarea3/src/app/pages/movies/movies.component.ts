import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Movie } from '../../shared/models/movie.model';
import { MovieFilter } from '../../shared/models/movie-filter.model';
import { MovieService } from '../../shared/services/movie.service';
import { FavoritesService } from '../../shared/services/favorites.service';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';
import { MovieFilterComponent } from '../../shared/components/movie-filter/movie-filter.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, MovieFilterComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  allMovies: Movie[] = [];
  filteredMovies: Movie[] = [];
  genres: string[] = [];
  years: number[] = [];

  currentFilter: MovieFilter = {};

  constructor(
    private readonly movieService: MovieService,
    private readonly favoritesService: FavoritesService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.allMovies = this.movieService.getMovies();
    this.filteredMovies = [...this.allMovies];
    this.genres = this.movieService.getGenres();
    this.years = this.movieService.getYears();
  }

  onFilterChange(filter: MovieFilter): void {
    this.currentFilter = filter;
    this.filteredMovies = this.movieService.filterMovies(filter);
  }

  onToggleFavorite(movie: Movie): void {
    this.favoritesService.toggleFavorite(movie);
  }

  isFavorite(movie: Movie): boolean {
    return this.favoritesService.isFavorite(movie.id);
  }

  onSelectMovie(movie: Movie): void {
    this.router.navigate(['/movies', movie.id]);
  }
}
