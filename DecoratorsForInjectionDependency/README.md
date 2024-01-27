# Decorators para ID (Injection Dependency)

Decorators para resolver dependência

## Self

Esse decorator obriga o Angular pegar o service que está declarado no providers do decorator **@Component**, caso não exista será lançado uma execeção.

## Optional

Esse decorator permite especificar que o service que será injetado é opcional e pode ou não ser injetado.


## SkipSelf

Esse decorator faz com que o Injection Depedency do Angular não pegue a injeção específica no **@Component**.

## Host

Pega o serviço do elemento host que tenha uma ViewProviders, além de permitir acessar o componente pai dentro do componente filho.
