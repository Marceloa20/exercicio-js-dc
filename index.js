// Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.

/*
let nota1 = parseFloat(prompt('Qual a sua primeira nota?'));
let nota2 = parseFloat(prompt('Qual a sua segunda nota?'));
let media = (nota1 + nota2)/2;

if (media == 10) {
    alert('Aprovado com distinção.')
} else if (media >= 7) {
    alert('Aprovado.')
} else {
    media < 7;
    alert('Reprovado.')
}
*/

// acessando uma tag e alterando ela pelo JS.
// var titulo = document.getElementsByTagName('p')[1]
// document.write('TESTE')

// acessando pelo ID
// var paragrafo = document.getElementById('primeiroParagrafo')
// document.write(titulo.innerText)


for (let d = 1; d <= 31; d++) {
    dia.innerHTML += "<option>" + d + "</option>";
}

let nomeMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
for (let m = 0; m <= 11; m++) {
    mes.innerHTML += "<option>" + nomeMes[m] + "</option>";
}

let dataAtual = new Date();
for (let a = dataAtual.getFullYear(); a >= 1900; a--) {
    ano.innerHTML += "<option>" + a + "</option>";
}

let n = 0;
while (n <= 100) {
    if (n % 2 === 0) {
        document.write( n + "<br>");
    }
    n++;
}

let td = {
    ID: 1,
    Nome: "ypioca",
    Descrição: "xxx",
    Quantidade: 3
}