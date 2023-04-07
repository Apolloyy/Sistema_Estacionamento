function Alugar() {

var categoria = document.getElementById('categoria').value;
var placa = document.getElementById('placa').value;
var horas = document.getElementById('horas').value;



if(horas <= 3 && horas > 0) {

    if(categoria == "Subcompacto") {
        document.getElementById('resultado').innerHTML = "Você terá que pagar: " + (3.50*horas).toFixed(2) + 'R$';
    }

    else if (categoria == "Compacto") {
        document.getElementById('resultado').innerHTML = "Você terá que pagar: " + (4.00*horas).toFixed(2) + 'R$';
    }

    else if (categoria == "Hatch") {
        document.getElementById('resultado').innerHTML = "Você terá que pagar: " + (4.50*horas).toFixed(2) + 'R$';
    }
    
    else if(categoria == "Sedan") {
        document.getElementById('resultado').innerHTML = "Você terá que pagar: " + (5.00*horas).toFixed(2) + 'R$';
        }
    
    else if (categoria == "SUV"){
        document.getElementById('resultado').innerHTML = "Você terá que pagar: " + (6.00*horas).toFixed(2) + 'R$';
    }

    else if(categoria == "Pick-up") {
        document.getElementById('resultado').innerHTML = "Você terá que pagar: " + (7.00*horas).toFixed(2) + 'R$';
    }


    } else {
        document.getElementById('resultado').innerHTML = "O Limite de horas são 3.";
        navigator.vibrate(1000);
    }
    navigator.vibrate(1000);
}

function NovaCompra()
{
    var placa = document.getElementById('placa').value = '';
    var horas = document.getElementById('horas').value = '';
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('categoria').value = 'Selecione';
    alert("Faça mais uma compra!");
    navigator.vibrate(2000);
}
