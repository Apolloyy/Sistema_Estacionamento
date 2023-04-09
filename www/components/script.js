function Alugar() {

//declaração de variaveis
var categoria = document.getElementById('categoria').value;
var placa = document.getElementById('placa').value;
var horas = document.getElementById('horas').value;

//condição para checar horas válidas
if(horas <= 3 && horas > 0) {

    //condições de categoria e placa (obrigando que preencha conforme o esperado)
    if(categoria == "Subcompacto" && placa != "") 
    {
        document.getElementById('resultado').innerHTML = "Você terá que pagar: " + (3.50*horas).toFixed(2) + 'R$';
        navigator.vibrate(0500);
    }

    else if (categoria == "Compacto" && placa != "") 
    {
        document.getElementById('resultado').innerHTML = "Você terá que pagar: " + (4.00*horas).toFixed(2) + 'R$';
        navigator.vibrate(0500);
    }

    else if (categoria == "Hatch" && placa != "") 
    {
        document.getElementById('resultado').innerHTML = "Você terá que pagar: " + (4.50*horas).toFixed(2) + 'R$';
        navigator.vibrate(0500);
    }
    
    else if(categoria == "Sedan" && placa != "") 
    {
        document.getElementById('resultado').innerHTML = "Você terá que pagar: " + (5.00*horas).toFixed(2) + 'R$';
        navigator.vibrate(0500);
        }
    
    else if (categoria == "SUV" && placa != "")
    {
        document.getElementById('resultado').innerHTML = "Você terá que pagar: " + (6.00*horas).toFixed(2) + 'R$';
        navigator.vibrate(0500);
    }

    else if(categoria == "Pick-up" && placa != "") 
    {
        document.getElementById('resultado').innerHTML = "Você terá que pagar: " + (7.00*horas).toFixed(2) + 'R$';
        navigator.vibrate(0500);
    }

    else 
    {
        document.getElementById('resultado').innerHTML = "Verifique se os campos estão corretamente preenchidos.";
        navigator.vibrate(0500);
    }

//condições para apenas ser permitido numeros inteiros e impedir que passe de 4
    if(horas != 1 && horas != 2 && horas != 3) 
    {
        document.getElementById('resultado').innerHTML = "Valor inválido. Aceitamos valores inteiros entre 1 e 3.";
        navigator.vibrate(1000);
    } 
  }
}

  //função para limpar inputs
function NovaCompra()

{
    //declaração de variaveis, com atribuição de valores vazios ('')
    var placa = document.getElementById('placa').value = '';
    var horas = document.getElementById('horas').value = '';
    var categoria = document.getElementById('categoria').value = '';

    //alert pedindo a nova compra do usuário
    alert("Faça mais uma compra!");
}