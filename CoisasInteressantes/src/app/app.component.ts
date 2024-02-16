import { HighlightDirectiveDirective } from './directives/highlight-directive.directive';
import { AfterViewInit, Component, ViewChild, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PaassingTemplateRefComponent } from './components/paassing-template-ref/paassing-template-ref.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PaassingTemplateRefComponent, HighlightDirectiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

 buttons = Array.from({ length: 10 });

 @ViewChildren('buttons')
 elements!: QueryList<ElementRef<HTMLButtonElement>>

 public ngAfterViewInit() {
  for (const { nativeElement: button } of this.elements) {
   button.addEventListener('click', () => console.log('Come meu cu ' + button.innerText));
  }
 }
}
