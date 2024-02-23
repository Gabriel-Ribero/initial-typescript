//Text
let nome = "Gabriel";
let sobrenome = "Ribeiro";
console.log("O tipo eh:", typeof nome);
console.log("O nome eh:", nome + " " + sobrenome);

//Numeric
let idade = 22;
let numeroDecimal = 10.5;
console.log("Otipo eh:", typeof idade);
console.log("O resultado númerico eh:", idade + numeroDecimal);

//Boolean
let verdade : boolean = true;
let falso = false;
console.log("O tipo verdade eh:", typeof verdade);
if (verdade) //Or if (verdade === true)
{
    console.log("O tipo eh verdadeiro");
}

//Array
let notas: number[] = [];
let paises: Array<string>;
let cidades = [
    'Sao Paulo',
    'Jundiaí',
    'Itupeva'
];
console.log("A cidade eh:", cidades[0]);
console.log("O tamanho do array cidades eh:", cidades.length);
notas.push(10);
console.log("Notas possui o valor na posicao 0:", notas[0]);
cidades.forEach(x => console.log("Cidade:", x));

//Objects = Tipos Complexos
const aluno = {
    nome: "Gabriel",
    nota: 10,
    ativo: true,
};
console.log("Aluno:", aluno);
const alunoComp = {
    nome: "Gabriel",
    nota: 10,
    ativo: true,
    escola: {
        nome: "UniAnchieta",
        materia: ['Desenvolvimento Framework III']
    }
};
console.log("Aluno complexo:", alunoComp);
let alunoTipo: {
    nome: string,
    nota: number,
    ativo: boolean,
} = {nome: "Gabriel", nota: 10.0, ativo: true};
console.log("Aluno tipo:", alunoTipo);

//Any
let varAny: any;
varAny = "Um texto";
varAny = 1;
varAny = {id: 1};
varAny = () => {
    console.log("Valor variavel any");
}
varAny();

//Null and Undefined
let varTypeNot = null;
console.log("Valor do varTypeNot:", varTypeNot);
if (varTypeNot == null) {
    console.log("Variavel eh null")
}
if (varTypeNot == undefined) {
    console.log("Variavel eh Undefined")
}