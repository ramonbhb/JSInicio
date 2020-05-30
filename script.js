alert("Hello World");

var resposta = prompt("Qual time você torce?");

if (resposta == "Cruzeiro") {
    alert("Você torce para o melhor time");
}
else {
    alert("Você torce para o pior time");
}

function validaCpf(cpf) {
    if (cpf.length == 11 ) {
        alert("CPF VÁLIDO");
    }
    else {
        alert("CPF INVÁLIDO");
    }
} 

var cpf = prompt("Qual é o seu cpf? (Somente números)");
validaCpf(cpf);

carro = {
    marca: "Fiat",
    modelo: "Bravo",
    ano: 2012
}

console.log(carro.marca);
console.log(carro.modelo);

var nomecompleto = prompt("Digite seu nome completo:");
nomes = nomecompleto.split(" ");
console.log(nomes);

var nome="joao"
var sobrenome="teodoro"

nometodo = "Seu nome completo é " + nome + " " + sobrenome;
console.log(nometodo);

document.getElementById("paragrafo1").innerHTML = nometodo;

function trocarPresidente() {
    document.getElementById("presidente").src = 'https://www.acritica.com/uploads/news/image/768739/show_x86080264_Brazilian-President-Jair-Bolsonaro-laughs-during-the-Armed-Forces-General-Officers-promotio-1.jpg.pagespeed.ic.9VZ9LY2pFG_99E4D486-2B6C-442C-B36F-6BF74569DB16.jpg'
}

// confirm("Deseja mesmo fazer isso?");