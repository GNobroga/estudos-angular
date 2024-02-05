# View Transitions

Somente com essa configuração, temos uma animação suave com fade-in e fade-out na troca de rotas da aplicação. Além disso, é possível customizar o CSS dessa transição.

```ts
  providers: [
    provideRouter(withViewTransitions())
  ]
```
