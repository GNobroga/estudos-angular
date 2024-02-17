# Pipes

## Pipes de texto

- JsonPipe
- LowerCasePipe
- SlicePipe
- TitleCasePipe
- UpperCasePipe

## Pipes númericos

- CurrencyPipe
- DecimalPipe
- PercentPipe

## Pipes de Datas

- DataPipe

## Pipes Assíncronos

- AsyncPipe


## Impuro e Puro

O pipe puro só vai ser executado caso o valor do parâmetro dele mude.

O pipe impuro já é chamado pra qualquer mudança que ocorra no componente. Estados dentro dele são compartilhados entre invocações do Pipe.

Utilizar pipes permite perfomatizar a aplicação.