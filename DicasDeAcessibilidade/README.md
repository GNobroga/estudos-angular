# Component como diretiva

Essa abordagem permite criar componentes preservando o elemento original, perservando os atributos originais (todos os aria). No exemplo abaixo eu especifico que **ui-button** só vai ser aplicado para elementos do tipo button que tiverem ui-button;

```ts
@Component({
  selector: 'button[ui-button]',
  template: `<ng-content></ng-content>`,
})
export class ButtonComponent {}

```

````html
<button ui-button>My button</button>
```


Dessa forma abaixo, qualquer elemento que tiver **ui-button** se tornará um componente.

```ts
@Component({
  selector: '[ui-button]',
  template: `<ng-content></ng-content>`,
})
export class ButtonComponent {}

```
