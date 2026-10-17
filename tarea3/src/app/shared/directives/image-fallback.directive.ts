import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImageFallback]',
  standalone: true
})
export class ImageFallbackDirective {
  @Input() appImageFallback: string = '';

  private readonly defaultSvgFallback =
    'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22600%22%20viewBox%3D%220%200%20400%20600%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%231e293b%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%230f172a%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22400%22%20height%3D%22600%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22200%22%20cy%3D%22260%22%20r%3D%2248%22%20fill%3D%22%23334155%22%2F%3E%3Cpath%20d%3D%22M190%20240l30%2020-30%2020z%22%20fill%3D%22%23e2e8f0%22%2F%3E%3Ctext%20x%3D%22200%22%20y%3D%22350%22%20fill%3D%22%2394a3b8%22%20font-family%3D%22sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20font-weight%3D%22600%22%3ECinema%20Collection%3C%2Ftext%3E%3C%2Fsvg%3E';

  private hasErrored = false;

  constructor(private readonly el: ElementRef<HTMLImageElement>) {}

  @HostListener('error')
  onError(): void {
    if (this.hasErrored) return;
    this.hasErrored = true;
    const element = this.el.nativeElement;
    element.src = this.defaultSvgFallback;
  }
}
