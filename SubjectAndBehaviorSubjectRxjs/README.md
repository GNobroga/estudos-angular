# Subject

Semelhante a um signal, porém, só emite valores quando alguém se inscreve.

# BehaviorSubject

Semelhante ao subject, porém, permite receber um valor inicial e já emite esse valor para os inscritos.

# lastValueFrom

Essa função é útil quando você deseja esperar que um Observable termine e obter o último valor emitido sem ter que lidar explicitamente com manipulação de assinatura ou usar callbacks.

```ts
const observable = interval(1000);

async function exemplo() {
  try {
    const lastValue = await lastValueFrom(observable);
    console.log('Último valor emitido:', lastValue);
  } catch (error) {
    console.error('Erro:', error);
  }
}
```
