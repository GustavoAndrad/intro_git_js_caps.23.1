const dadosEntrada = [
    {nome: "João", idade: 17},
    {nome: "Lucas", idade: 17},
    {nome: "Geovana", idade: 17},
    {nome: "Gustavo", idade: 17},
    {nome: "Ana", idade: 17},
    {nome: "Gabriela", idade: 17},
    {nome: "Gabriel", idade: 17},
    {nome: "Marcos", idade: 17},
    {nome: "Lara", idade: 17},
    {nome: "Julio", idade: 17}
];

function separaNomesLetraG(dadosEntrada){
    let nomesComLetraG = dadosEntrada.filter((dadosEntrada) => dadosEntrada.nome[0] == "G");
    return nomesComLetraG;
}

console.log(separaNomesLetraG(dadosEntrada));