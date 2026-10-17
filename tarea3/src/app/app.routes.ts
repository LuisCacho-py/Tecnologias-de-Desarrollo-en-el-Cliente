import { Routes } from '@angular/router';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    title: 'CineSphere | Colección de Películas'
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent,
    title: 'CineSphere | Detalle de Película'
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    title: 'CineSphere | Mis Películas Favoritas'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
