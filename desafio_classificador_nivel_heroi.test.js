const { calcularNivelPorXP } = require('./desafio_classificador_nivel_heroi');

function runTests() {
  const tests = [
    { xp: -10, expected: "Nível desconhecido" },
    { xp: 0, expected: "Ferro" },
    { xp: 999, expected: "Ferro" },
    { xp: 1000, expected: "Ferro" }, 
    { xp: 1001, expected: "Bronze" },
    { xp: 1500, expected: "Bronze" },
    { xp: 2000, expected: "Bronze" },
    { xp: 2001, expected: "Prata" },
    { xp: 3000, expected: "Prata" },
    { xp: 5000, expected: "Prata" },
    { xp: 5001, expected: "Ouro" },
    { xp: 6000, expected: "Ouro" },
    { xp: 7000, expected: "Ouro" },
    { xp: 7001, expected: "Platina" },
    { xp: 7500, expected: "Platina" },
    { xp: 8000, expected: "Platina" },
    { xp: 8001, expected: "Ascendente" },
    { xp: 8500, expected: "Ascendente" },
    { xp: 9000, expected: "Ascendente" },
    { xp: 9001, expected: "Imortal" },
    { xp: 9500, expected: "Imortal" },
    { xp: 10000, expected: "Imortal" },
    { xp: 10001, expected: "Radiante" },
    { xp: 20000, expected: "Radiante" },
  ];

  let passed = 0;
  let failed = 0;

  tests.forEach(({ xp, expected }) => {
    const result = calcularNivelPorXP(xp);
    if (result === expected) {
      console.log(`PASS: XP=${xp} => ${result}`);
      passed++;
    } else {
      console.error(`FAIL: XP=${xp} => ${result} (expected ${expected})`);
      failed++;
    }
  });

  console.log(`\nTest results: ${passed} passed, ${failed} failed.`);
  if (failed === 0) {
    console.log("All tests passed successfully!");
  } else {
    console.log("Some tests failed.");
  }
}

runTests();
