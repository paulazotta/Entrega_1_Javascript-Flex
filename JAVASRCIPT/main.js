// // FUNCION --> INICIAR SESION // Funciona ok  
function iniciarSesion(){
    let usuario=prompt ("Ingresá tu usuario");
    let password=prompt ("Ingresá tu contraseña");
        if (usuario === "user" && password === "Password"){
            alert ("Bienvenido");
        } else{
            alert ("Los datos ingresados son incorrectos. Ingrese como invitadx o póngase en contacto con nosotros");
        }
};
// // FUNCION --> INVITADX // Funciona ok 
function invitadx(){
    let nombre =prompt("Bienvenidx a nuestro sitio, ¿Cuál es tu nombre?");
    if (nombre == "" || nombre == null){
        alert ("No ingresaste nada");
    }else{
        alert ("Bienvenidx " + nombre + " vamos a descubrir el scanner perfecto para vos");
    }
};
//------------------------------------------------------------------------------------------------------------
// BIENVENIDA // Funciona ok 
let mensajeBienvenida= confirm("¡Hola! Si ya estás registradx, podés ingresar con tu usuario y contraseña");
if(mensajeBienvenida){
    iniciarSesion();
} else {
    invitadx();
};


// ARRAYS 
let equiposLineaAl = [" AL319", " AL419", " AL529", " AL529 HD", " AL629"];
console.log(equiposLineaAl);

let al319 = {
    Marca: "Autel",
    Cobertura: "Multimarca",
    Precio: 10000,
    Stock: 15,
}

let equiposLineaMD = [" MD802", " MD808", " MD808 Pro"];
let equiposLineaMX = [" MX808", " MX808 TS"];
let equiposLineaMaxiSys = [" MS906", " MS906 BT", "MS908", " MS908 Pro"];
equiposLineaMaxiSys.unshift (" MS905 Mini")


// FUNCION --> PRESUPUESTO // Funciona ok 
function presupuestoTalleres(){
    let valorAComparar=prompt("Ingresá tu presupuesto aproximado (entre $50.000 y $200.000) para mostrarte distintas opciones");
        if (valorAComparar <= 50000){
            alert("Te recomendamos algún equipo de la línea AL (Autolink): " + equiposLineaAl + ". Podés verlos en la sección de productos.");
        } else if (valorAComparar <= 100000){
            alert ("Te recomendamos algún equipo de la línea MD (MaxiDiag): " + equiposLineaMD + ". Podés verlos en la sección de productos.");
        } else if (valorAComparar <=150000) {
            alert ("Te recomendamos algún equipo de la línea MX (MaxiCheck): " + equiposLineaMX + ". Podés verlos en la sección de productos.");
        } else if (valorAComparar > 150001){
            alert ("Te recomendamos algún equipo de la línea MaxiSys: " + equiposLineaMaxiSys + ". Podés verlos en la sección de productos.");
        }
};
console.log (presupuestoTalleres);

// FUNCION --> PARTICULARES - MODELO DE AUTO // Funciona ok 
function modeloDeAuto(){
    let modeloDeAuto=prompt("¿Qué marca de auto tenés? \n FORD \n VW \n TOYOTA \n RENAULT \n CHEVROLET").toUpperCase();
switch (modeloDeAuto) {
    case "FORD":
        alert ("Te recomendamos scaner AP200. Podés verlo en la sección de productos");
        break;
    case "VW":
        alert ("Te recomendamos el scaner VAG. Podés verlo en la sección de productos");
        break;
    case "TOYOTA":
        alert ("Te recomendamos el scaner Mini VCI. Podés verlo en la sección de productos");
        break;
    case "RENAULT":
        alert ("Te recomendamos el scaner ELM327. Podés verlo en la sección de productos");
        break;
    case "CHEVROLET":
        alert ("Te recomendamos el scaner Op Com. Podés verlo en la sección de productos");
        break;
    default: 
        alert=("Mandanos un mail desde la sección de contacto así te podemos ayudar");
        break;
    };
};
//------------------------------------------------------------------------------------------------------------

// TIPO DE CLIENTES // Funciona ok 
let tipoDeCliente=confirm("¿Tenés un taller mecánico?");
if (tipoDeCliente){
    presupuestoTalleres();
} else{
    modeloDeAuto();
};

