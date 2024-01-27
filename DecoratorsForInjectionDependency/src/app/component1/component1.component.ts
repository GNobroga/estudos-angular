import { Component, Host, Optional, Self } from '@angular/core';
import ToysService from '../services/toys-service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.scss'
})
export class Component1Component {

  constructor(
    @Host() appComponent: AppComponent,
    @Host() toysService: ToysService
  ) {
    console.log(appComponent.name);
    console.log(toysService.totalClients());
  }
}
