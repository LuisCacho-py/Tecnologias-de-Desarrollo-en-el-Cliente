import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieFilter } from '../models/movie-filter.model';
import { MOVIES_DATA } from '../data/movies.data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly movies: Movie[] = [...MOVIES_DATA];

  /**
   * Obtiene la colección completa de películas en memoria
   */
  getMovies(): Movie[] {
    return [...this.movies];
  }

  /**
   * Obtiene el detalle de una película por su ID
   */
  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  /**
   * Filtra las películas según los criterios especificados
   */
  filterMovies(filter: MovieFilter): Movie[] {
    return this.movies.filter(movie => {
      // Filtro por Título
      if (filter.title && filter.title.trim() !== '') {
        const titleMatch = movie.title.toLowerCase().includes(filter.title.toLowerCase().trim());
        if (!titleMatch) return false;
      }

      // Filtro por Director
      if (filter.director && filter.director.trim() !== '') {
        const directorMatch = movie.director.toLowerCase().includes(filter.director.toLowerCase().trim());
        if (!directorMatch) return false;
      }

      // Filtro por Productor
      if (filter.producer && filter.producer.trim() !== '') {
        const producerMatch = movie.producer.toLowerCase().includes(filter.producer.toLowerCase().trim());
        if (!producerMatch) return false;
      }

      // Filtro por Género
      if (filter.genre && filter.genre.trim() !== '' && filter.genre !== 'Todos') {
        const genreMatch = movie.genre.toLowerCase() === filter.genre.toLowerCase().trim();
        if (!genreMatch) return false;
      }

      // Filtro por Año
      if (filter.year !== undefined && filter.year !== null && !isNaN(filter.year)) {
        if (movie.year !== Number(filter.year)) return false;
      }

      return true;
    });
  }

  /**
   * Obtiene la lista única de géneros disponibles
   */
  getGenres(): string[] {
    const genres = this.movies.map(m => m.genre);
    return Array.from(new Set(genres)).sort();
  }

  /**
   * Obtiene la lista única de directores disponibles
   */
  getDirectors(): string[] {
    const directors = this.movies.map(m => m.director);
    return Array.from(new Set(directors)).sort();
  }

  /**
   * Obtiene la lista única de productores disponibles
   */
  getProducers(): string[] {
    const producers = this.movies.flatMap(m => m.producer.split(',').map(p => p.trim()));
    return Array.from(new Set(producers)).sort();
  }

  /**
   * Obtiene los años disponibles ordenados descendentemente
   */
  getYears(): number[] {
    const years = this.movies.map(m => m.year);
    return Array.from(new Set(years)).sort((a, b) => b - a);
  }
}
