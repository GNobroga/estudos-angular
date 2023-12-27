# EstilosCss

### host

O host é um seletor especial que se refere ao componante em que está sendo usado

```scss
:host {
  h1 {
    background-color: red;
  }
}
```

### host context

É um seletor que permite ativar estilos com base em um contexto. Por exemplo, se o body tiver .class-name esse contexto vai ser ativo.

```scss
:host-context(.class-name) {

}
```

### ng deep

Permite quebrar o encapsulamento de estilos que o Angular tem por padrão. Aplicando um estilo global através de um componente.

```scss
::ng-deep {
  ul {
    background-color: red;
  }
}
```
