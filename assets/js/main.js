// Capturar o evento de submit do formulario
const form = document.querySelector('#formulario'); //isso esta selecionando o formulario

form.addEventListener('submit', function (e) {
    e.preventDefault ();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const escalaImc = getEscalaImc(imc);

    const msg = `Seu IMC é ${imc} (${escalaImc}).`;
    
    setResultado(msg, true);
});

function getEscalaImc (imc) {
    const escala = ['Abaixo do peso', 'Peso normal', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return escala[5];
    if (imc >= 34.9) return escala[4];
    if (imc >= 29.9) return escala[3];
    if (imc >= 34.9) return escala[2];
    if (imc >= 18.5) return escala[1];
    if (imc < 18.5) return escala[0];
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);

}