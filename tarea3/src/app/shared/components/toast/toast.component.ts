import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FavoritesService, ToastMessage } from '../../services/favorites.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit {
  toast$!: Observable<ToastMessage | null>;

  constructor(private readonly favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.toast$ = this.favoritesService.toast$;
  }
}
