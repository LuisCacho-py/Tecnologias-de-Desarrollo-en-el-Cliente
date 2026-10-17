import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MovieFilter } from '../../models/movie-filter.model';

@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css'
})
export class MovieFilterComponent implements OnInit, OnDestroy {
  @Input() genres: string[] = [];
  @Input() years: number[] = [];
  @Input() totalCount: number = 0;
  @Input() filteredCount: number = 0;

  @Output() filterChange = new EventEmitter<MovieFilter>();

  filterForm = new FormGroup({
    title: new FormControl<string>(''),
    director: new FormControl<string>(''),
    producer: new FormControl<string>(''),
    genre: new FormControl<string>('Todos'),
    year: new FormControl<number | null>(null)
  });

  private sub!: Subscription;
  isExpanded: boolean = false;

  ngOnInit(): void {
    // Escucha reactiva con debounce ligero para mejorar la fluidez
    this.sub = this.filterForm.valueChanges
      .pipe(debounceTime(150))
      .subscribe(val => {
        const filterVal: MovieFilter = {
          title: val.title || undefined,
          director: val.director || undefined,
          producer: val.producer || undefined,
          genre: val.genre || undefined,
          year: val.year !== null && val.year !== undefined && !isNaN(Number(val.year)) ? Number(val.year) : null
        };
        this.filterChange.emit(filterVal);
      });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  resetFilters(): void {
    this.filterForm.reset({
      title: '',
      director: '',
      producer: '',
      genre: 'Todos',
      year: null
    });
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  get activeFiltersCount(): number {
    let count = 0;
    const v = this.filterForm.value;
    if (v.title && v.title.trim() !== '') count++;
    if (v.director && v.director.trim() !== '') count++;
    if (v.producer && v.producer.trim() !== '') count++;
    if (v.genre && v.genre !== 'Todos') count++;
    if (v.year !== null && v.year !== undefined && !isNaN(Number(v.year))) count++;
    return count;
  }

  selectGenre(genre: string): void {
    this.filterForm.patchValue({ genre });
  }
}
