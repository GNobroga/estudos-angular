# Resources

## @Inject(Document)

Permite injetar o Document do browser pra manipular o DOM.

## ViewChild

O static permite antecipar a instância do objeto, ou seja, ele ficará disponível pra acesso já no **ngOnInit**. Porém só serve para referências estáticas (elementos não  são dinâmicos, ou seja, que não usam bindings), elementos que não utilizam *ngIf, *ngFor, etc. 

```ts
    @ViewChild('name', { static: true })
    public myRef!: ElementRef;
```

## ViewChildren

Semelhante ao **ViewChild**, porém permite pegar uma lista de elementos.

```html
    <button #buttons *ngFor="let label of labels; index as Index">{{ Index }}</button>
```

```ts
    @ViewChildren('buttons')
    buttons!: QueryList<ElementRef<HTMLButtonElement>;
```

## Diretivas 

### HostBinding

## HostListener

## Renderer2

## ElementRef

## TemplateRef

## Diretiva com Múltiplos Seletores

Da forma abaixo eu consigo utilizar a diretiva como componente e diretiva mesmo.

```ts
    @Directive({
        selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubTitle]`,
        host: {
            'class': 'card', // Consigo colocar classes e assim criar diretivas que funcionam como componentes.
        },
    })
```

## CSS Encapsulação

A propriedade encapsulation permite quebrar a encapsulação do css do componente, ou seja, permitindo que ele esteja disponível para toda a aplicação e não exclusivo para o componente.

**None** - Quebra a encapsulação

**Emulated** - É o padrão, não vaza o CSS.

**ShadowDown** - Isola completamente o componente, dessa forma nenhum estilo global vai conseguir sobrescrever as classes declaradas nele, porém se o componente tiver filhos o css poderá ser aplicado nos filhos.

```ts
    @Component({
        selector: 'component-name',
        template: ..,
        encapsulation: ViewEncapsulation.None,
    })
```

Com a configuração acima a classe abaixo, poderá ser usada como se tivesse sido declarada dentro do styles.scss.

```scss
    .class {
        color: red;
    }
```

## Tópicos Avançados

A diferença entre **ng-container** para **ng-template** é que o ng-template só vai exibir o conteúdo se ele tiver uma condição.

### ngTemplateOutlet

Essa diretiva permite carregar o ng-template sem precisar especificar uma condição pra ele ser acionado.

```html
     <ng-container *ngTemplateOutlet="name"></ng-container>
     <ng-container *ngIf="condition" [ngTemplateOutlet]="name"></ng-container>

    <ng-template #name>
        <h1>Gabriel</h2>
    </ng-template>

    <ng-template [ngIf]="condition" [ngIfElse]="elseTemplate">
        <h1>Condição</h1>

    </ng-template>


    <ng-template #elseTemplate>
        Not Condição 
    </ng-template>
```

### @ContentChild

O ContentChild permite pegar elementos que são passados para dentro do componente, ou seja, filhos;

```html
    <app-header>
        <h1 #h1>Hello</h1>
    </app-header>
```

```ts
    @ContentChild('h1')
    element!: ElementRef;
```