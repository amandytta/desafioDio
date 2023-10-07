let nome = "andy";
let exp = 8899;
let rank = "";

if(exp < 1000) {
  rank = "ferro";
} else if(exp >= 1001 && exp < 3000) {
  rank = "bronze";
} else if(exp >= 3001 && exp < 5000) {
  rank = "prata";
} else if(exp >= 5001 && exp < 7000) { 
  rank = "ouro";
} else if(exp >= 7001 && exp < 8000) {
  rank = "platina";
} else if(exp >= 8001 && exp < 9000) {
  rank = "ascendente";
} else if(exp >= 9001 && exp < 10000) {
  rank = "imortal";
} else if(exp >= 10001) { 
  rank = "radiante";
}

console.log("O herói de nome " + nome + " está no rank de " + rank);