// Função que calcula o saldo de ranqueadas e determina o nível do jogador
function calcularNivel(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  const saldoVitorias = vitorias - derrotas;

  // Variável para armazenar o nível do jogador
  let nivel;

  // Determina o nível com base no número de vitórias
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

  // Retorna o resultado como um objeto
  return {
    saldoVitorias: saldoVitorias,
    nivel: nivel,
  };
}

// Exemplo de uso da função
const vitorias = 85; // Alterar conforme necessário
const derrotas = 10; // Alterar conforme necessário

const resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem com o saldo e o nível do jogador
console.log(
  `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
);
