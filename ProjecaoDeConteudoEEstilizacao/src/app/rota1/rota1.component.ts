import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-rota1',
  standalone: true,
  imports: [],
  templateUrl: './rota1.component.html',
  styleUrl: './rota1.component.scss'
})
export class Rota1Component implements OnInit {

  activatedRoute = inject(ActivatedRoute);

  public ngOnInit() {
    this.activatedRoute.data.subscribe(console.log);
  }
}
