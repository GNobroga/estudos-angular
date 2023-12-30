import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-content.component.html',
  styleUrl: './first-content.component.scss'
})
export class FirstContentComponent {

}
