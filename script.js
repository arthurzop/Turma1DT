function gerarsenha(){

    // vamos obter as configurações da senha

    document.getElementById("resposta").value = "";
    let tamanho = document.getElementById("tamanho").value;
    let quantidade = document.getElementById("quant").value;
    let especial = document.getElementById("special").checked;
    let numero = document.getElementById("number").checked;
    let maiuscula = document.getElementById("upper").checked;

    // vamos configurar as opções de caracteres para a senha

    let caracteres = "abcdefghijklmnopqrstuvwxyz";

    // vamos configuar as opções de caracteres para a senha de acordo com as opções

    if(especial) {
       caracteres += "!@#$%&*?";
}
    if(numero) {
       caracteres += "0123456789";
}

    if(maiuscula) {
       caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

    // Vamos gerar a senha de acordo com as configurações acima

    for(let i = 0; i < quantidade; i++){
        let senha = "";
        for(let j = 0; j < tamanho; j++){
            var aleatorio = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.substring(aleatorio, aleatorio + 1);
        
        }
        document.getElementById("resposta").value += senha + '\n';
    }
}

function limpar(){
    document.getElementById("tamanho").value = "";
    document.getElementById("quant").value = "";
    document.getElementById("resposta").value = "";
    document.getElementById("special").checked = false;
    document.getElementById("number").checked = false;
    document.getElementById("upper").checked = false;
}
