import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie.model';

export interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'info' | 'warning';
}

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  /**
   * Estado en memoria de las películas favoritas
   * Estrictamente sin LocalStorage, SessionStorage, cookies ni APIs.
   */
  private readonly favoritesSubject = new BehaviorSubject<Movie[]>([]);
  public readonly favorites$: Observable<Movie[]> = this.favoritesSubject.asObservable();

  /**
   * Sistema de notificaciones reactivas (Toasts)
   */
  private readonly toastSubject = new BehaviorSubject<ToastMessage | null>(null);
  public readonly toast$: Observable<ToastMessage | null> = this.toastSubject.asObservable();

  /**
   * Retorna una copia actual de la lista de películas favoritas
   */
  getFavorites(): Movie[] {
    return [...this.favoritesSubject.getValue()];
  }

  /**
   * Retorna un Observable con la cantidad actual de favoritos
   */
  getFavoritesCount$(): Observable<number> {
    return this.favorites$.pipe(map(favs => favs.length));
  }

  /**
   * Determina si una película específica está marcada como favorita por su ID
   */
  isFavorite(movieId: number): boolean {
    return this.favoritesSubject.getValue().some(m => m.id === movieId);
  }

  /**
   * Agrega una película a favoritos si aún no está presente
   */
  addFavorite(movie: Movie): void {
    const current = this.favoritesSubject.getValue();
    if (!this.isFavorite(movie.id)) {
      const updated = [...current, movie];
      this.favoritesSubject.next(updated);
      this.showToast(`"${movie.title}" añadida a tus favoritos`, 'success');
    }
  }

  /**
   * Elimina una película de favoritos inmediatamente
   */
  removeFavorite(movieId: number): void {
    const current = this.favoritesSubject.getValue();
    const movieToRemove = current.find(m => m.id === movieId);
    const updated = current.filter(m => m.id !== movieId);
    this.favoritesSubject.next(updated);

    if (movieToRemove) {
      this.showToast(`"${movieToRemove.title}" eliminada de favoritos`, 'info');
    }
  }

  /**
   * Alterna el estado de favorita de una película (toggle)
   */
  toggleFavorite(movie: Movie): boolean {
    if (this.isFavorite(movie.id)) {
      this.removeFavorite(movie.id);
      return false;
    } else {
      this.addFavorite(movie);
      return true;
    }
  }

  /**
   * Limpia toda la lista de favoritos en memoria
   */
  clearFavorites(): void {
    this.favoritesSubject.next([]);
    this.showToast('Se han vaciado todas las películas favoritas', 'warning');
  }

  /**
   * Emite una notificación temporal
   */
  private showToast(message: string, type: 'success' | 'info' | 'warning'): void {
    const toast: ToastMessage = {
      id: Date.now(),
      message,
      type
    };
    this.toastSubject.next(toast);
    setTimeout(() => {
      if (this.toastSubject.getValue()?.id === toast.id) {
        this.toastSubject.next(null);
      }
    }, 3200);
  }
}
