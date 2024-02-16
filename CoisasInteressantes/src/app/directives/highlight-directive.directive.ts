import { AfterViewInit, Directive, DoCheck, HostBinding, HostListener, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
  standalone: true
})
export class HighlightDirectiveDirective implements DoCheck {

  @HostBinding('style.backgroundColor')
  public backgroundColor!: string;

  @HostListener('click', ['$event', '"valueForSecondParameter"'])
  public onClick(event: MouseEvent, value: string): void {
    console.log(event, value);
  }

  public renderer2 = inject(Renderer2);

  constructor() { }

  public ngDoCheck(): void {
    this.backgroundColor = 'blue';
  }

}
