# Services

## HttpHeaders

É um objeto que permite passar valores de headers para o HttpClient.

```ts
  const headers = new HttpHeaders().set('Content-Type', 'application/json').
```

## HttpParams

Adiciona valores no Query String

```ts
  const params = new HttpParams().set('page', '1').
```

## Interceptors

Permite interceptar uma requisição usando o HttpClient. Um exemplo de uso, enviar a cada solicitação o Token JWT.

```bash
  ng g interceptor <<name>>
```

```ts
  providers: [
    provideHttpClient(
      withInterceptors([<<name>>])
    )
  ]
```


## Rxjs Alguns comandos

### shareReplay

Resposta única para todos os observables

### retry

Tenta acionar o observable

```ts
  retry({ count: 2, delay: 1000 })
```

### concatMap

Concatena observables
