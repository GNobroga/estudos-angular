import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent implements AfterViewInit {

  public name = 'Gabriel Cardoso';

  public buttonDisabled = false;

  // Condições reativas nessa versão do Angular 17 não funciona, signal resolve isso.
  public buttonText = this.buttonDisabled ? 'Desabilitado' : 'Habilitado';

  public showAlert(): void {
    window.alert('Hello World');
  }

  @ViewChild('input') public declare inputRef: ElementRef;

  public ngAfterViewInit(): void  {
    console.log(this.inputRef);
  }
}
