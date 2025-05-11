const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que calcula o nível do herói com base no XP
function calcularNivelPorXP(xp) {
    let nivel;

    if (xp < 0) {
        nivel = "Nível desconhecido";
    } else if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }

    return nivel;
}

// Função que exibe o resultado no console
function exibirResultado(nome, xp) {
    const nivel = calcularNivelPorXP(xp);
    if (nivel === "Nível desconhecido") {
        console.error(`Erro: XP fora dos limites esperados para o herói ${nome}. Valor recebido: ${xp}`);
        console.log(`O Herói de nome **${nome}** tem um XP fora dos limites esperados.`);
    } else {
        console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
    }
}

// Função que valida se a string representa um número inteiro válido
function isValidInteger(str) {
  // Verifica se a string representa um número inteiro válido (sem decimais ou símbolos)
  return /^-?\d+$/.test(str);
}

// Função que pergunta o nome e o XP do herói e controla o fluxo do programa
function perguntarNomeXP() {
  readline.question('Digite o nome do herói: ', (nome) => {
    readline.question('Digite a quantidade de XP do herói: ', (xpStr) => {
      if (!isValidInteger(xpStr)) {
        console.error(`Erro: Entrada inválida para XP: "${xpStr}"`);
        console.log("Por favor, insira um valor inteiro válido para XP.");
        perguntarNomeXP();
        return;
      }
      const xp = parseInt(xpStr, 10);
      exibirResultado(nome, xp);
      readline.question('Deseja calcular novamente? (s/n): ', (resposta) => {
        if (resposta.toLowerCase() === 's') {
          perguntarNomeXP();
        } else {
          readline.close();
        }
      });
    });
  });
}

// Exporta a função para testes automatizados
module.exports = { calcularNivelPorXP };

// Inicia o programa se o arquivo for executado diretamente
if (require.main === module) {
  perguntarNomeXP();
}
