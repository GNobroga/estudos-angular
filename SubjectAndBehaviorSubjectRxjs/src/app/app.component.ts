import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  subject = new Subject();

  behaviorSubject = new BehaviorSubject(100);

  public ngOnInit() {
    setTimeout(() => {
      this.subject.next("Hello, this is a test 1");
      this.behaviorSubject.next(200);
    }, 5000);

    setTimeout(() => {
      this.subject.next("Hello, this is a test 2");
    }, 10000);

    this.behaviorSubject.subscribe(value => console.log(`Behavior ${value}`));


    this.subject.subscribe(value => console.log(value));
  }
}
