import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss'
})
export class ForComponent {

  public items: string[] = [
    'Smartphone',
    'Notebook',
    'Computer',
    'Printer'
  ];

  public trackByName(index: number, item: any) {
    return item;
  }
}
