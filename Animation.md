# Animations

```ts
    animations: [
        trigger('fadeIn', [
            state('start', style({
                opacity: 0,
            })),
            state('end', style({
                opacity: 1,
            })),
            transition('start => end', animate('1s ease-in')),
            //transition('* => end', animate('1s ease-in')),
            //transition('start <=> end', animate('1s ease-in')),
            //transition('void => *', animate('1s ease-in')),
            //transition('* => *', animate('1s ease-in')),
            //transition(':enter', animate('1s ease-in')),
            //transition('* => void', animate('1s ease-in')),
        ]);
    ]
```

O **\*** é um coringa pra casar com qualquer estado.

**=>** - Define uma transição unidirecional

**<=>** - Define uma transição bidirecional

**void => \*** - Representa o estado inicial do elemento, quando ele não tiver nenhum estado associado. **:enter** é uma abreviação para ele.

**\* => void** - Representa o estado antes do elemento ser removido no DOM. **:leave** é uma abreviação para isso.

## Utilizando no Template

```html
    <div [@fadeIn]></div>
    <div [@fadeIn]="'start'"></div>
```


## Keyframes

Permite definir animações para pedaços de tempo (quadro por segundos) até completar o tempo estipulado no **animate**. No exemplo abaixo eu coloquei 2 segundos.

```ts
    transition(':enter', [
        animate('2s', keyframes([ 
            style({
                opacity: 0
            }), // 0s
            style({
                opacity: 0.5
            }), // 1s
            style({
                opacity: 1
            }), // 2s
        ]))
    ])
```

No style tem a propriedade **offset** que permite definir o tempo para cada keyframe.


## Query + Stagger

```ts
    animations: [
        trigger('items', [
            transition(':enter', [
                query('li', [
                    style({
                        background: 'yellow',
                        transform: 'translateX(100px)',
                    }),
                    animate('1s'),
                ])
            ])
        ])
    ]
```


```ts
    animations: [
        trigger('items', [
            transition(':enter', [
                query('li', [
                    style({
                        background: 'yellow',
                        transform: 'translateX(100px)',
                    }),
                    stagger('1s', [animate('1s')])
                ])
            ])
        ])
    ]
```

O stagger permite escalonar, ou seja, cada elemento vindo da consulta vai levar 1s de forma sequencial. Ele aplica o efeito em 1 elemento depois que terminar vai pro próximo como se fosse uma fila.


```html
    <ul [@items]>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
```

## Group


```ts
    animations: [
        trigger('items', [
            transition(':enter', [
                query('li', [
                    style({
                        background: 'yellow',
                        transform: 'translateX(100px)',
                    }),
                    group([
                        animate('1s', style({})),
                        animate('1s', style({})),
                    ])
                ])
            ])
        ])
    ]
```

Permite criar grupos de animações sem respeitar a sequência das animações, ou seja, antes de uma animação termina ele já aplica a próxima.

## Sequence


```ts
    animations: [
        trigger('items', [
            transition(':enter', [
                query('li', [
                    style({
                        background: 'yellow',
                        transform: 'translateX(100px)',
                    }),
                    sequence([
                        animate('1s', style({})),
                        animate('1s', style({})),
                    ])
                ])
            ])
        ])
    ]
```


Diferente do group o sequence aplica os animate em sequência respeitando o timer de cada animate.

## Leave + for

```ts
    animations: [
        trigger('items', [
            transition('* => *', [
                query('li:leave', [
                    style({
                        background: 'yellow',
                        transform: 'translateX(100px)',
                    }),
                    animate('1s', style({})), 
                ])
            ]),
            // transition(':decrement', animate())
            // transition(':increment', animate())
        ])
    ]
```

O leave permite adicionar animações elementos que vão sair do DOM em um consulta.