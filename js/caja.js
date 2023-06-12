// Obtener referencias a los elementos del formulario
const comb = document.querySelector('#combos');
const cant = document.querySelector('#cantidad');
const calcular = document.querySelector('#total');
const clientes = document.querySelector('#cliente');
const detalletotal = document.querySelector('#detalle');
//tipo de cliente y sus descuentos
let mayor = 0.50;
let menor = 0.25;
let primer = 0.10;

//Valor combos
const sabanas = 50000;
const Acolchados = 90000;
const Cortinas = 25000;

//funcion
function totalPagar(){
    let totalValor = 0;
    let valor = 0;
    let mensaje = "";
    if(comb.value == "0"){
        alert("Debes seleccionar un combo");
        console.log(comb.value);
        mensaje = "No";
    }
    else if(cant.value <=0){
        alert("Debes ingresa la cantidad de combos");
        mensaje = "No";
    }
    else if(comb.value == "1"){
        valor = sabanas * cant.value;
        if(clientes.value == "primera"){
            totalPagar = valor - (valor * primer);
            console.log(totalPagar);
        }
        else if(clientes.value == "menor"){
            totalPagar = valor - (valor * menor);
            console.log(totalPagar);
        }
        else{
            totalPagar = valor - (valor * mayor);
            console.log(totalPagar);
        }
    }
    else if(comb.value == "2"){
        valor = Acolchados * cant.value;
        if(clientes.value == "primera"){
            totalPagar = valor - (valor * primer);
            console.log(totalPagar);
        }
        else if(clientes.value == "menor"){
            totalPagar = valor - (valor * menor);
            console.log(totalPagar);
        }
        else{
            totalPagar = valor - (valor * mayor);
            console.log(totalPagar);
        }
    }
    else if(comb.value == "3"){
        valor = Cortinas * cant.value;
        if(clientes.value == "primera"){
            totalPagar = valor - (valor * primer);
            console.log(totalPagar);
        }
        else if(clientes.value == "menor"){
            totalPagar = valor - (valor * menor);
            console.log(totalPagar);
        }
        else{
            totalPagar = valor - (valor * mayor);
            console.log(totalPagar);
        }
    }
    if(mensaje == ""){
    detalletotal.innerHTML = `Total a pagar : $${totalPagar}`;
    }
}



//evento
calcular.addEventListener('click', totalPagar);