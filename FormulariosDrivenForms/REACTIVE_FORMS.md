# Reactive Forms

Diferente do Driven Forms que a lógica fica no .html do componente, com essa abordagem a lógica fica diretamente no .ts do componente. Todas as formas de validações ficam no .ts, seja pra desabilitar, resetar e manipular dados de formulários e inputs.

Assim como no ngForm que tem o ngFormOptions no FormsReactive tem as propriedades updateOn, etc.

Alguns names aceitam string e numbers.


- FormControl

- FormGroup

- FormArray - Permite criar e excluir controls dinamicamente.

- AsyncValidator

- Validator

- formGroupName

- formGroup

- formControl

- formControlName

- formArrayName

- ngSubmit

- FormBuilder - Permite criar ReactiveForms mais facilmente.


## Usando validadores async

Os asyncValidators herdam de AsyncValidator assim como no Driven Forms.

```ts
  nome = new FormControl('', {
    asyncValidators: [asyncValidatorHere]
  })
```
