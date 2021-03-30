const calcular = document.getElementById('calcular')

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        var imc = (peso / (altura**2)).toFixed(2);
        var classificacao = '';
        if (imc<18.5) {
            classificacao = 'está abaixo do peso';

        }
        else if (imc>=18.5 && imc<=24.9){
            classificacao = 'está com peso normal';
        }
        else if (imc>=25 && imc<=29.9){
            classificacao = 'está com sobrepeso';
        }
        else {
            classificacao = 'está obeso';
        }
        resultado.innerText = `Olá, ${nome}! Seu imc é de: ${imc} e você ${classificacao}`;

    }
    else{
        resultado.innerText = "Preencha todos os campos"
        //alert ('Preencha todos os campos!!!')
    }
}

calcular.addEventListener('click',imc);