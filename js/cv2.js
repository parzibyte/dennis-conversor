/**
 * Created by Luis Cabrera Benito on 25/01/2016.
 */
$(document).ready(function () {
    principal();
});
var abreviaciones = {
    'cm': 'centimetro'
};
var unidades = {
        'Longitud': {
            'grupo': 'Longitud',
            'unidades': [
                'kilometro',
                'metro',
                'centimetro',
                'milimetro',
                'micrometro',
                'nanometro',
                'milla',
                'yarda',
                'pie',
                'pulgada'
            ],
            'equivalencias': {
                'kilometro': {
                    'kilometro': 1,
                    'metro': 1000,
                    'centimetro': 100000,
                    'milimetro': 1e+6,
                    'micrometro': 1e+9,
                    'nanometro': 1e+12,
                    'milla': 0.621371,
                    'yarda': 1093.61,
                    'pie': 3280.84,
                    'pulgada': 39370.1
                },
                'metro': {
                    'kilometro': 0.001,
                    'metro': 1,
                    'centimetro': 100,
                    'milimetro': 1000,
                    'micrometro': 1e+6,
                    'nanometro': 1e+9,
                    'milla': 0.000621371,
                    'yarda': 1.09361,
                    'pie': 3.28084,
                    'pulgada': 39.3701
                },
                'centimetro': {
                    'kilometro': 1e-5,
                    'metro': 0.01,
                    'centimetro': 1,
                    'milimetro': 10,
                    'micrometro': 10000,
                    'nanometro': 1e+7,
                    'milla': 6.2137e-6,
                    'yarda': 0.0109361,
                    'pie': 0.0328084,
                    'pulgada': 0.393701
                },
                'milimetro': {
                    'kilometro': 1e-6,
                    'metro': 0.001,
                    'centimetro': 0.1,
                    'milimetro': 1,
                    'micrometro': 1000,
                    'nanometro': 1e+6,
                    'milla': 6.2137e-7,
                    'yarda': 0.00109361,
                    'pie': 0.00328084,
                    'pulgada': 0.0393701
                },
                'micrometro': {
                    'kilometro': 1e-9,
                    'metro': 1e-6,
                    'centimetro': 1e-4,
                    'milimetro': 0.001,
                    'micrometro': 1,
                    'nanometro': 1000,
                    'milla': 6.2137e-10,
                    'yarda': 1.0936e-6,
                    'pie': 3.2808e-6,
                    'pulgada': 3.937e-5
                },
                'nanometro': {
                    'kilometro': 1e-12,
                    'metro': 1e-9,
                    'centimetro': 1e-7,
                    'milimetro': 1e-6,
                    'micrometro': 0.001,
                    'nanometro': 1,
                    'milla': 6.2137e-13,
                    'yarda': 1.0936e-9,
                    'pie': 3.2808e-9,
                    'pulgada': 3.937e-8
                },
                'milla': {
                    'kilometro': 1.60934,
                    'metro': 1609.34,
                    'centimetro': 160934,
                    'milimetro': 1.609e+6,
                    'micrometro': 1.609e+9,
                    'nanometro': 1.609e+12,
                    'milla': 1,
                    'yarda': 1760,
                    'pie': 5280,
                    'pulgada': 63360
                },
                'yarda': {
                    'kilometro': 0.0009144,
                    'metro': 0.9144,
                    'centimetro': 91.44,
                    'milimetro': 914.4,
                    'micrometro': 914400,
                    'nanometro': 9.144e+8,
                    'milla': 0.000568182,
                    'yarda': 1,
                    'pie': 3,
                    'pulgada': 36
                },
                'pie': {
                    'kilometro': 0.0003048,
                    'metro': 0.3048,
                    'centimetro': 30.48,
                    'milimetro': 304.8,
                    'micrometro': 304800,
                    'nanometro': 3.048e+8,
                    'milla': 0.000189394,
                    'yarda': 0.333333,
                    'pie': 1,
                    'pulgada': 12
                },
                'pulgada': {
                    'kilometro': 2.54e-5,
                    'metro': 0.0254,
                    'centimetro': 2.54,
                    'milimetro': 25.4,
                    'micrometro': 25400,
                    'nanometro': 2.54e+7,
                    'milla': 1.5783e-5,
                    'yarda': 0.0277778,
                    'pie': 0.0833333,
                    'pulgada': 1
                },
            }
        }
    },
    $inputPrincipal = $('input#principal'),
    $resultado = $('div#resultado'),
    contador = 0,
    segundosCambiaPlaceholder = 2,
    limiteLongitudNumeros = 16,
    palabrasPermitidas = ["en", "a"],
    sugerencias = [
        "20 hercios a kilohertz",
        "1 milimetro en pies",
        "14.6 miligramos en onzas",
        "256 bits a megabytes",
        "15 mes a horas",
        "256 bits a megabytes"
    ];
function principal() {
    setInterval(cambiaPlaceholder, segundosCambiaPlaceholder * 1000);
    $inputPrincipal.keyup(function () {
        compruebaValores($(this).val());
    });
}
function compruebaValores(oracion) {
    if (oracion) {
        var arreglo = oracion.split(' ');
        if (arreglo.length === 4) {
            if (arreglo[arreglo.length - 1]) {
                var primerNumero = arreglo[0],
                    primeraUnidad = arreglo[1].toLowerCase(),
                    palabraIntermedia = arreglo[2].toLowerCase(),
                    segundaUnidad = arreglo[3].toLowerCase();
                if (palabrasPermitidas.indexOf(palabraIntermedia) !== -1) {
                    if (!isNaN(primerNumero)) {
                        if (primerNumero.length <= limiteLongitudNumeros - 1) {
                            if (primeraUnidad.slice(-1) === 's') {
                                primeraUnidad = primeraUnidad.slice(0, -1);
                            }
                            if (segundaUnidad.slice(-1) === 's') {
                                segundaUnidad = segundaUnidad.slice(0, -1);
                            }
                            var grupoUnidad1 = dameGrupo(primeraUnidad),
                                grupoUnidad2 = dameGrupo(segundaUnidad);
                            if (grupoUnidad1 !== false) {
                                if (grupoUnidad2 !== false) {

                                    escribeResultado('Los '
                                        + primerNumero
                                        + ' '
                                        + primeraUnidad
                                        + ' equivalen a '
                                        + convierte(grupoUnidad1, primerNumero, primeraUnidad, segundaUnidad)
                                        + ' '
                                        + segundaUnidad);
                                } else {
                                    escribeError('La segunda unidad no existe: ' + segundaUnidad);
                                }
                            } else {
                                escribeError('La primera unidad no existe: ' + primeraUnidad);
                            }
                        } else {
                            escribeError('Lo siento, solamente se permiten números de 16 cifras sin incluir el punto decimal');
                        }
                    } else {
                        escribeError('La primera parte de la oración no es un número: ' + primerNumero);
                    }
                } else {
                    escribeError('Trata de unir con otra palabra como "en" o "a": ' + palabraIntermedia);
                }
            }
        }
    }

}
function convierte(grupo, numero, u1, u2) {
    //var factor = dameEquivalencia(grupo, u1, u2);
    //var resultado = factor * numero;
    return dameEquivalencia(grupo, u1, u2) * numero;
}
/*
 * Esta función regresa el grupo al cual pertenece una unidad, por ejemplo "Masa" o "Longitud"
 * */
function dameGrupo(unidad) {
    for (var x in unidades) {
        if (unidades[x].unidades.indexOf(unidad) !== -1) {
            return unidades[x].grupo;
        }
    }
    return false;
}
/*
 * Esta función regresa el factor de conversión que hay de una unidad a otra
 * */
function dameEquivalencia(grupo, u1, u2) {
    return unidades[grupo].equivalencias[u1][u2];
}

function cambiaPlaceholder() {
    if (contador < sugerencias.length) {
        $inputPrincipal.attr('placeholder', sugerencias[contador]);
        contador++;
    } else {
        contador = 0;
    }
}
function escribeError(mensaje) {
    $resultado.html(mensaje);
}
function escribeResultado(mensaje) {
    $resultado.html(mensaje);
}
function pruebas(grupo, u1, u2) {
}

