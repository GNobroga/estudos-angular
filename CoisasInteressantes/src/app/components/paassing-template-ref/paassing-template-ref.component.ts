import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-paassing-template-ref',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paassing-template-ref.component.html',
  styleUrl: './paassing-template-ref.component.scss'
})
export class PaassingTemplateRefComponent {

  @Input()
  public title: any;
}
