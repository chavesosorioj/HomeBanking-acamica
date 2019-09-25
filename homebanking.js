 //Declaración de variables
var nombreUsuario = "Juliana Chaves";
var floor = Math.floor;
var saldoCuenta =  floor(parseFloat(3800));
var limiteExtraccion = floor(parseFloat(1000));
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoSeguridad = floor(parseFloat(1870));

var restarDinero = function parseInt(monto) {
     console.log(monto - saldoCuenta);
 }


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}


//Funciones que tenes que completar

function iniciarSesion() {
        var ingreseCodigo = floor(parseFloat(prompt("Ingrese su código de seguridad")));
        if (ingreseCodigo === codigoSeguridad){
            alert("Bienvenido/a" + nombreUsuario + "ya puedes comenzar a realizar operaciones");
        } else {
          alert("Código Incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
          saldoCuenta = floor(parseFloat(0));
          actualizarSaldoEnPantalla();

        }  
}

function cambiarLimiteDeExtraccion() {
    limiteExtraccion = floor(parseFloat(prompt("Ingrese su nuevo límite de extracción")));
    if (limiteExtraccion > 200) {
        alert("Su nuevo límite de extracción es" + ":" + "$" + limiteExtraccion);
        actualizarLimiteEnPantalla();
    } else if(limiteExtraccion < 200) {
        alert("El monto a establecer debe ser mayor a $200");
    } else {
        isNaN(limiteExtraccion);
         alert("El limite debe ser un monto en pesos");
         alert("El monto a establecer debe ser mayor a $0");
    }
}   

// chequea saldo disponible
function haySaldoDisponible(dineroAExtraer) {
    if (dineroAExtraer <= saldoCuenta) {
        return true;
    } else {
        alert("No hay saldo disponible para extraer esa cantidad de dinero");
        return false;
      }

}
//verifica que el monto a extraer no supere el límite del saldo
function esMenorAlLimite(dineroAExtraer){
    if (dineroAExtraer <= limiteExtraccion) {
        return true;
       } else {
           alert("El monto supera el limite de extración");
           return false;
       }
}
//chequea que el dinero a extraer sean billetes de $100
function esMultiploDe100 (dineroAExtraer) {
    if (dineroAExtraer % 100 == 0) {
        return true;
        } else {
         alert("Solo puede extraer billetes de $100");
    }
}
//verifica si lo ingresado es un numero
function esNumero(n) { 
    return !isNaN(n);
}
function extraerDinero() {
    var dineroAExtraer = floor(parseFloat(prompt("Ingrese la suma que desea extraer")));
    if (esNumero(dineroAExtraer) && haySaldoDisponible(dineroAExtraer) && esMultiploDe100(dineroAExtraer) && esMenorAlLimite(dineroAExtraer)) {
        saldoCuenta = saldoCuenta - dineroAExtraer;
        alert("Dinero extraído" + ":" + "$" +  dineroAExtraer + "\n" + "Saldo Anterior" + ":" + "$" + (saldoCuenta + dineroAExtraer) + "\n" + "Saldo Actual" + ":" + "$" + (saldoCuenta - dineroAExtraer));
        actualizarSaldoEnPantalla();
        } else {
            isNaN(dineroAExtraer);
            alert("El valor ingreso es incorrecto");
        }
}       
function sumarDinero() {
    console.log(depositarDinero + saldoCuenta);    
}
function depositarDinero() {
    var depositarDinero = floor(parseFloat(prompt("Ingrese la suma que desea depositar")));
    if (depositarDinero) {
        saldoCuenta = saldoCuenta + depositarDinero;
    alert("Has depositado" + ":" + "$" + depositarDinero + "\n" + "Saldo Anterior" + ":" + "$" + (saldoCuenta - depositarDinero) +"\n"+"Saldo Actual" + ":" + "$" + (saldoCuenta + depositarDinero));
    actualizarSaldoEnPantalla();
    }  else {
            isNaN(depositarDinero);
            alert("El valor ingreso es incorrecto");
        }
}

//variables de servicios para pagar

function pagarServicio() {
    var facturaAgua = 350;
    var facturaLuz = 210;
    var facturaInternet = 570;
    var facturaTelefono = 425;
    var facturaLuz = 210;
    var factura;
    var servicio;

    var servicio = floor(parseFloat(prompt("Ingrese el numero que corresponda con el servicio que desea pagar: \n 1 - Agua \n 2 - Luz \n 3 - Internet \n 4 - Telefono")));

    switch (servicio) {
        case 1:
            factura = facturaAgua;
            servicio = "Agua";
            break;
        case 2:
            factura = facturaLuz;
            servicio = "Luz";
            break;
        case 3:
            factura = facturaInternet;
            servicio = "Internet";
            break;
        case 4:
            factura = facturaTelefono;
            servicio = "Telefono";
            break;
        default:
            alert("No existe el servicio que se ha seleccionado");
            break;
    }

    if (saldoCuenta < factura) {
        alert("No hay suficiente saldo en tu cuenta para pagar este servicio")
    } else if (saldoCuenta -= factura) {
        alert("Has pagado el servicio de: " + servicio + ". \n Saldo anterior era $ " + (saldoCuenta + factura) + "\n Dinero descontado es de $ " + factura + "\n Saldo Actual es de $ " + saldoCuenta)
        actualizarSaldoEnPantalla();
    } else {
        isNaN(servicio);
        alert("El valor ingreso es incorrecto");
    }
}

function transferirDinero() {
   var montoATransferir = floor(parseFloat(prompt("Ingrese la cantidad de dinero que quiere tranferir")));
   if (montoATransferir > saldoCuenta){
        alert("No puede tranferir esa cantidad de dinero");
    } else if (montoATransferir != esNumero) {
        alert("Debe ingresar el monto a tranferir en simbolo numérico");
    } else {
    var numeroCuenta = prompt("Ingrese el número de cuenta a la que quiere hacer transferencia");
        if (numeroCuenta == cuentaAmiga1 || cuentaAmiga2) {
            alert("Se han tranferido $" + montoATransferir +"\n"+ "Cuenta destino:" +"\n" + numeroCuenta);
            saldoCuenta = saldoCuenta - montoATransferir;
            actualizarSaldoEnPantalla();      
             } else {
                 alert("El número de cuenta ingreso es incorrecto");
             }
    } 
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta ;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
