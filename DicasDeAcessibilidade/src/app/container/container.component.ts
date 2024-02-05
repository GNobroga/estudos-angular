import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: '[my-container]',
  standalone: true,
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContainerComponent {}
