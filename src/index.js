// Solicita o nome do herói
let nomeHeroi = "Laquisa"

// Solicita a quantidade de XP e converte para número
let xpHeroi = ("10050"));

// Variável para armazenar o nível
let nivel = "Radiante";

// Estrutura de decisão para determinar o nível com base no XP
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else {xpHeroi > 10001
    nivel = "Radiante";
}

// Exibe a mensagem final
console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivel}**`);

