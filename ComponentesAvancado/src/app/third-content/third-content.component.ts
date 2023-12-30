import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-third-content',
  standalone: true,
  imports: [],
  templateUrl: './third-content.component.html',
  styleUrl: './third-content.component.scss',

  /*
    Essa propriedade altera como as detecção de mudança é feita, ou seja, quando o componente recebe
    dados via @Input;

    Existem dois valores para changeDetection:

      OnPush - É uma estratégia de detecção de alterações que só verifica as alterações em um componente quando necessário. Ele permite ganhar desempenho.
      Default

  */
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdContentComponent
  implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy
{

  #formBuilder = inject(FormBuilder);

  @ContentChild('text') // Pega elementos de dentro do ng-content, semelhante ao ViewChild mas só funciona pra elementos de dentro do ng-content.
  public text!: ElementRef;

  public ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  public ngOnInit(): void {
    console.log('ngOnOnit');
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // Ciclo de vida pra quando o ng-content estiver com os elementos inicializados
  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(this.text);
  }

  public ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  public ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
