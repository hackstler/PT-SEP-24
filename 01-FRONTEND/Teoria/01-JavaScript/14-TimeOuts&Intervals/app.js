//! ------------ TIME OUTS & INTERVALS ---------- //
// Son dos herramientas que nos permiten programar tareas (por ejemplo ejecutar funciones) en el futuro

//todo ------> CUIDADO CON LOS CONSOLE.LOG Y LOS INTERVALS Y TIMEOUTS, SI NO LOS COMENTÁIS NO PARAN

// acción en tiempo real - sin timeOut y sin interval
console.log('Mensaje a tiempo real 🤗');


//// ------ TIME OUT ------- ////
// es una función que se ejecuta una sola vez después de un tiempo específico
// setTimeOut() tiene dentro una función (callback) que es la acción que quiero que haga
// y necesita otro argumento después de la función que establezca el tiempo
// el tiempo se da en ms (milisegundos) ---> 5 segundos = 5000 ms
// Ej ---> imprimimos un mensaje pasados 5 segundos

setTimeout(() => {
    console.log('Mensaje pasados 5 segundos ⏰');
}, 5000)



//// ------ INTERVALS ------- ////
// es una función que se ejecuta de forma contínua cada cierto período de tiempo
// setInterval() tiene dentro una función (callback) que es la acción que quiero que haga
// y necesita otro argumento después de la función que establezca el tiempo
// el tiempo se da en ms (milisegundos) ---> 5 segundos = 5000 ms
// Ej ---> imprimimos un mensaje cada 3 segundos

setInterval(() => {
    console.log('Mensaje cada 3 segundos 🔁');
}, 3000)


//? ---- EJEMPLOS CON AMBAS HERRAMIENTAS + CLEARINTERVAL

//* creamos la función fuera del timeOut o interval y la llamamos dentro

function holaEspera() {
    console.log('Espera 3 segundos para decir HOLA 🙉');
}

const timeOutHola = setTimeout(holaEspera, 3000)

//* contador que suma +1 cada 2 segundos ---> PROBLEMA !!!!! ----> INTERVALO INFINITO!

let contador = 0;

function masUno() {
    contador++; // usamos el operador ++ para decir que se incremente en 1
    console.log('CONTADOR INIFITO 🚗' + contador);
}

const masUnoInterval = setInterval(masUno, 2000)

//* Parar un intervalo infinito ---> repite la acción solo 5 veces y para el intervalo

let contador2 = 0;

function masUno2() {
    contador2++; // usamos el operador ++ para decir que se incremente en 1
    console.log('CONTADOR CON clearInterval 💥' + contador2);

    // agrego una condición para decirle cuándo tiene que parar con la herramienta clearInterval()
    if (contador2 === 5) {
        clearInterval(masUnoInterval2) // le indico que parece la variable donde está el setInterval
    }
}

const masUnoInterval2 = setInterval(masUno2, 2000)

