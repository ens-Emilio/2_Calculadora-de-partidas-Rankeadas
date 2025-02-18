const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

function exibirResultado(vitorias, derrotas) {
    const { saldoVitorias, nivel } = calcularNivel(vitorias, derrotas);
    console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);
}

function perguntarVitoriasDerrotas() {
  readline.question('Digite o número de vitórias: ', (vitorias) => {
    readline.question('Digite o número de derrotas: ', (derrotas) => {
      exibirResultado(parseInt(vitorias), parseInt(derrotas));
      readline.question('Deseja calcular novamente? (s/n): ', (resposta) => {
        if (resposta.toLowerCase() === 's') {
          perguntarVitoriasDerrotas();
        } else {
          readline.close();
        }
      });
    });
  });
}

// Testes
console.log("Iniciando testes:");
console.log("Teste 1 - Ferro");
exibirResultado(8, 2);

console.log("\nTeste 2 - Bronze");
exibirResultado(15, 5);

console.log("\nTeste 3 - Prata");
exibirResultado(35, 10);

console.log("\nTeste 4 - Ouro");
exibirResultado(70, 15);

console.log("\nTeste 5 - Diamante");
exibirResultado(85, 20);

console.log("\nTeste 6 - Lendário");
exibirResultado(95, 25);

console.log("\nTeste 7 - Imortal");
exibirResultado(110, 30);

console.log("\nTeste 8 - Saldo negativo");
exibirResultado(10, 15);

perguntarVitoriasDerrotas();

