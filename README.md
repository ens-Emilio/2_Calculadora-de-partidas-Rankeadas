# Desafio Classificador de Nível de Herói

Este projeto é uma solução para o desafio da [DIO.me](https://dio.me) que classifica o nível de um herói com base na quantidade de experiência (XP) fornecida pelo usuário.

## Funcionalidades

- Entrada interativa do nome do herói e da quantidade de XP.
- Classificação do nível do herói segundo as faixas de XP:
  - XP < 0: Nível desconhecido
  - 0 a 1000: Ferro
  - 1001 a 2000: Bronze
  - 2001 a 5000: Prata
  - 5001 a 7000: Ouro
  - 7001 a 8000: Platina
  - 8001 a 9000: Ascendente
  - 9001 a 10000: Imortal
  - >= 10001: Radiante
- Validação rigorosa da entrada de XP, rejeitando valores inválidos como números decimais, símbolos e strings não numéricas.
- Logs de erro para entradas inválidas.
- Permite múltiplas consultas em sequência.

## Como usar

Execute o programa com Node.js:

```bash
node desafio_classificador_nivel_heroi.js
```

Siga as instruções no terminal para inserir o nome do herói e a quantidade de XP.

## Testes automatizados

O projeto inclui testes automatizados para validar a função de classificação de níveis. Para executar os testes:

```bash
node desafio_classificador_nivel_heroi.test.js
```

## Autor

Emilio N.Silva

## Desafio

Este projeto faz parte do desafio prático da [DIO.me](https://dio.me) para reforçar conceitos de variáveis, operadores, laços de repetição e estruturas de decisão.
