const dadosEntrada = [
    {nome: "João", idade: 10},
    {nome: "Lucas", idade: 17},
    {nome: "Geovana", idade: 10},
    {nome: "Gustavo", idade: 17},
    {nome: "Ana", idade: 56},
    {nome: "Gabriela", idade: 13},
    {nome: "Gabriel", idade: 4},
    {nome: "Marcos", idade: 12},
    {nome: "Lara", idade: 7},
    {nome: "Julio", idade: 13}
];
//Definição dos dados de entrada


const lista_Itens_Nomes_Com_G = dadosEntrada.filter((dadosEntrada) => dadosEntrada.nome[0] == "G");
// Array com os itens das pessoas com nomes que COMEÇAM com a letra G
// Terá mais de uso no código

function retornaNomesLetraG(){ // Utiliza lista_Itens_Nomes_Com_G e retorna os nomes das pessoas (letra G)
    let nomesComLetraG = lista_Itens_Nomes_Com_G.map((dadosEntrada) => dadosEntrada.nome);
    return nomesComLetraG.join(", ");
}

function calculaMediaIdades(){ // Utiliza lista_Itens_Nomes_Com_G e retorna a média das idades das pessoas (letra G)
    let somaIdades = lista_Itens_Nomes_Com_G.reduce((a,b) => a + b.idade ,0);
    let mediaIdades = somaIdades / lista_Itens_Nomes_Com_G.length;
    return mediaIdades;
}

//Área de impressão
console.log("====================RESOLUÇÃO====================");
console.log("==> Pessoas com nome começado com a letra G: ", retornaNomesLetraG());
console.log("==> Média geral das idades: ", calculaMediaIdades());