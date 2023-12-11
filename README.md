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
