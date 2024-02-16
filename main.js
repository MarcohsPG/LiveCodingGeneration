arreglo = ["adios","marcos","lizeth","caballo","generation","tres","uno"];
cadena = "hola";

function Ej1(cadena, arreglo) {
    respuesta = [];
    tamañoCadena = cadena.length;
    arreglo.forEach(element => {
        if (element.length>tamañoCadena) {
            respuesta.push(element);
        }
    });
    return respuesta;
}


console.log(Ej1(cadena,arreglo));