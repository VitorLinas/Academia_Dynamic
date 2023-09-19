function cadastrar(){
    window.alert("Formulário ilustrativo!");
}

window.sr = ScrollReveal({reset: true});
sr.reveal('.servicos_prestados ,.cards_planos', {
    duration: 2000,
    rotate:{x:0, y:80, z: 0},
    once: true,
    delay: 300,
    reset: false
});


function calculoIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultadoIMC = document.getElementById("resultadoIMC");
    let meuImc =  peso / (altura * altura);
 

    if(meuImc < 18.5){
        
        resultadoIMC.innerHTML = `Seu IMC é ${meuImc.toFixed(2)}: Abaixo do peso`;
    }else if(meuImc >= 18.5 && meuImc < 24.9){
        resultadoIMC.innerHTML = `Seu IMC é ${meuImc.toFixed(2)}: Peso saudável`;
    }else if(meuImc >= 25 && meuImc < 29.9){
        resultadoIMC.innerHTML = `Seu IMC é ${meuImc.toFixed(2)}: Sobrepeso`;
    }else if(meuImc >= 30 && meuImc < 34.9){
        resultadoIMC.innerHTML = `Seu IMC é ${meuImc.toFixed(2)}: Obesidade grau 1`;
    }else if(meuImc >= 35 && meuImc < 39.9){
        resultadoIMC.innerHTML = `Seu IMC é ${meuImc.toFixed(2)}: Obesidade grau 2`;
    }else if(meuImc >= 40){
        resultadoIMC.innerHTML = `Seu IMC é ${meuImc.toFixed(2)}: Obesidade grau 3 (obesidade mórbida)`;
    }else{
        window.alert("Insira um valor válido");
    }

    console.log(peso);
}