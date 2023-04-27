// num1 = prompt('Digite primeiro o número: ')
// num2 = prompt('Digite segundo o número: ')

// soma = parseInt(num1) + parseInt(num2)

// window.alert('a soma é ' + soma)

function somar() {
    var num1 = parseInt(document.getElementById('num1').value)
    var num2 = parseInt(document.getElementById('num2').value)

    var soma = num1 + num2
    document.getElementById('result').innerHTML = `O Resultado da soma é = ${soma}`
}
