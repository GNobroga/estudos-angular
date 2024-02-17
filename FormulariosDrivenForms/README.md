# Formularios Driven Forms

## ngModel


```html

  <input #input="ngModel" ngModel (ngModelChange)="OnChange($event)">

  <div *ngIf="input.dirty && input.touched">

    <span *ngIf="input.hasError('required')">O input é requerido.</span>

  </div>

```

**ngModelChange** = Permite pegar os dados de entrada quando se utiliza o NgModel.

## ngForm

```html
  <form #f="ngForm">  
    <input name="name" ngModel>
  </form>
```


## ngFormOptions

Permite especificar configurações para o ngModel e ngForm.

**change** - Aplica as validações ao alterar o estado de qualquer input (default)

**submit** - Aplica as validações ao clicar em enviar.

**blur** - 

```html
  <form #f="ngForm" [ngFormOptions]="{ updateOn: 'change' }">  
    <input name="name" ngModel>
  </form>
```


## ngModelGroup

Permite organizar os inputs em grupos

Ao adicionar ngModelGroup será criado um propriedade com o nome do grupo.

Além disso, o ngModelGroup tem um exportAs.

```html

  <form #f="ngForm" [ngFormOptions]="{ updateOn: 'change' }">  
    <input name="name" ngModel>

    <div ngModelGroup="nome" #grupo="ngModelGroup">
        <input name="name1" ngModel>
        <input name="name2" ngModel>
    </div>
</form>

```

## Utilizando NgForm com Custom Component

Com a configuração abaixo informamos para o componente utilizar a instância mais próxima do ngForm. Ou seja, ao fazer isso eu linko as propriedades de dentro do input com o ngForm mais próximo dele.

```ts
@Component({
  selector: 'app-my-component',
  template: `<input name="name" ngModel/>`,
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FormUserComponent {}
```

```html
  <form #f="ngForm">
    <app-my-component>
  </form>
```


## Criar validadores customizados

É uma diretiva que permite validar Driven Forms, seja um ngForm, ngModel, ngModelGroup, etc. O erro que tiver pegamos com o getError.

```ts
@Directive({
  selector: '[appInvalidTextValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InvalidTextValidatorDirective,
      multi: true
    }
  ]
})
export class InvalidTextValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErros | null {

    return control.value.includes('Gabriel') ? null : { invalidText: true };
  }
}
```


```html
   <form #f="ngForm" [ngFormOptions]="{ updateOn: 'change' }">  
    <input name="name" ngModel appInvalidTextValidator>
  </form>
```
