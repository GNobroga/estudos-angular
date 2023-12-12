# Novidades 

Repositório para armazenar novidades relacionadas ao Angular V17

## Control Flow

Essa é a nova forma de se utilizar estruturais condicionas, muito semelhante ao Razor.

### @if

```html

  @if(condition) {
    <h2>First</h2>
  }
  @else if (condition) {
     <h2>Second</h2>
  }
  @else {
    <h2>Third</h2>
  }

```

### @for

Forma nova

```html

  <!-- Track otimiza o desempenho de listas renderizadas -->
  @for(item of data | async; track item) {
    <li>{{ item }}</li>
  }

```

Forma antiga

```html

  <ng-container *ngFor="let item of data | async; trackBy trackByFunction">
      <li>{{ item }}</li>
  </ng-container>

```

#### @For e seus valores

```html
  @for (item of items; track item.name
    let a = $index; 
    let b = $count;
    let c = $first;
    let d = $last;
    let e = $even;
    let f = $odd;
  ) {
    <p>Value = {{ item }} Index = {{ a }} </p>
  }
```

#### @For - @empty

```html
  @for (item of items; track item.id) {
    <li>{{ item }}</li>
  } @empty {
    <li>Não contém valores</li>
  }
```

### Switch


```html
  @switch('A') {
    @case('B') {
      <!--  -->
    }
    @case('C') {
      <!--  -->
    }

    @default {
      <!--  -->
    }
  }
```

## Seletores Especiais

**:host** - É um seletor que se refere ao componente que está sendo usado. 

```scss

:host {

  h2 {
    background-color: #ff0000;
  }

}

```

**:host-context** - Permite aplicar estilos com base no contexto do componente pai. Ou seja, se o elemento pai estiver em um contexto onde ele é filho de uma div.theme-dark o estulo abaixo será aplicado no elemento h2.


```scss

:host-context(.theme-dark) {
  h2 {
    background-color: #000;
  }
}

```

```html

  <div class="theme-dark">
      <app-component>
  </div>

```

**::ng-deep** - Esse seletor permite quebrar o mecanismo de encapsulamento de css do Angular e aplicar estilos que antes não afetavam o componente.

```scss

::ng-deep {
  .theme-dark {
    background-color: silver;
  }
}

```

## Defferable Views

### @defer

Permite carregar um componente em modo Lazy Loading.

```html
  @defer {
    <app-list/>
  } @placeholder {
    <p>Mostrar antes de carregar algo</p>
  } @loading {
    <p>Carregando...</p>
  } @error {
    <p>Carregando  falhou</p>
  }
```

#### @placeholder

É  primeira mensagem que vai aparecer. Ele pode receber alguns parâmetros.

**minimum 5s** -

```html
  @placeholder(minimum 5s) {
    <p>Content</p>
  }
````

#### @loading

Ele funciona quando o componente está sendo baixado. Ele pode receber alguns parâmetros.

**after 5s** 

**minimum 5s**

#### Paramêtros para a função @defer

**on idle** - É o padrão da função @defer

**on timer()** - Adiciona um Delay 

**on viewport** - Carrega de acordo com a Viewport

**on interaction** - Carrega apartir de uma interação

```html
  <button #clicked>Click here!</button>

  @defer(on interaction(clicked)) {
    <app-list/>
  } @placeholder {
    <p>Mostrar antes de carregar algo</p>
  } @loading {
    <p>Carregando...</p>
  } @error {
    <p>Carregando  falhou</p>
  }
```
**on immediate** - Carrega imediatamente

**on prefetch** - Carrega de uma vez, sem passar pelo loading.

```html
  <button #clicked>Click here!</button>

  @defer(on interaction(clicked); prefetch on idle) {
    <app-list/>
  } @placeholder {
    <p>Mostrar antes de carregar algo</p>
  } @loading {
    <p>Carregando...</p>
  } @error {
    <p>Carregando  falhou</p>
  }
```

### when

Permite colocar uma expressão booleana ou obsevable no @defer que funcionará como trigger. Lembrando que os triggers
são operações OR, então se eu tivesse um on interaction(trigger) e o when isTruVariable fosse false, mas o
trigger fosse disparado iria carregar o componente.

```html
 @defer(when isTrueVariable) {
    <app-list/>
  } @placeholder {
    <p>Mostrar antes de carregar algo</p>
  } @loading {
    <p>Carregando...</p>
  } @error {
    <p>Carregando  falhou</p>
  }
```

## Template 

### Text Interpolation

```html
  {{ value }}
```

### Property Bind


```html
  <input [disabled]="value" type="text">
```

### Attribute Binding

```html
  <p [attr.aria-label]="label"></p>
```

### Class and Style Binding

```html
  <div [class.theme-dark]="isDark" [style.display]="isDark ? 'none' : 'block' "></div>
```

### Event Binding

```html
  <div (click)="makeSomething()"></div>
  <div (keydown.press)="makeSomething()"></div>
```


### Two-way Binding

```html
  <input name="name" [(ngModel)]="name">
```

### NgClass e NgStyle (Diretivas de atributos) 

```html
  <div [ngClass]="{ 'theme-dark': true }" [ngStyle]="{ 'backgroundColor': 'red' }"></div>
```


### Template Variables

```html
  <input #name name="name" type="text">
  <h1>{{ name.value }}</h1>
```
