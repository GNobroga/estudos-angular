# @Inject(Document)

Permite injetar o Document do browser pra manipular o DOM.

# ViewChild

O static permite antecipar a instância do objeto, ou seja, ele ficará disponível pra acesso já no **ngOnInit**. Porém só serve para referências estáticas (elementos não  são dinâmicos, ou seja, que não usam bindings), elementos que não utilizam *ngIf, *ngFor, etc. 

```ts
    @ViewChild('name', { static: true })
    public myRef!: ElementRef;
```

# ViewChildren

Semelhante ao **ViewChild**, porém permite pegar uma lista de elementos.

```html
    <button #buttons *ngFor="let label of labels; index as Index">{{ Index }}</button>
```

```ts
    @ViewChildren('buttons')
    buttons!: QueryList<ElementRef<HTMLButtonElement>;
```