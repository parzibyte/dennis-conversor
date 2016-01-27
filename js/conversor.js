/**
 * Created by Luis Cabrera Benito on 25/01/2016.
 */
/*
 * todo hacer que reconozca unidades con espacios "milla naútica"
 * todo hacer que reconozca abreviaciones "cm"
 * */
$(document).ready(function () {
    principal();
    $selectPrimerGrupo.val('metro');
});
var abreviaciones = {
    'Longitud': {
        'kilometro': ['kilómetro', 'km'],
        'metro': ['m'],
        'centimetro': ['cm', 'centímetro'],
        'milimetro': ['mm', 'milímetro'],
        'micrometro': ['micrómetro'],
        'nanometro': ['nanómetro', 'nm'],
        'milla': ['mi'],
        'yarda': ['yd'],
        'pie': ['ft'],
        'pulgada': ['in', 'inch']

    }
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
        },
        'Masa': {
            'grupo': 'Masa',
            'unidades': [
                'tonelada',
                'kilogramo',
                'gramo',
                'miligramo',
                'microgramo',
                'tonelada larga',
                'tonelada corta',
                'stone',
                'libra',
                'onza'
            ],
            'equivalencias': {
                'tonelada': {
                    'tonelada': 1,
                    'kilogramo': 1000,
                    'gramo': 1e+6,
                    'miligramo': 1e+9,
                    'microgramo': 1e+12,
                    'tonelada larga': 0.984207,
                    'tonelada corta': 1.10231,
                    'stone': 157.473,
                    'libra': 2204.62,
                    'onza': 35274
                },
                'kilogramo': {
                    'tonelada': 0.001,
                    'kilogramo': 1,
                    'gramo': 1000,
                    'miligramo': 1e+6,
                    'microgramo': 1e+9,
                    'tonelada larga': 0.000984207,
                    'tonelada corta': 0.00110231,
                    'stone': 0.157473,
                    'libra': 2.20462,
                    'onza': 35.274
                },
                'gramo': {
                    'tonelada': 1e-6,
                    'kilogramo': 0.001,
                    'gramo': 1,
                    'miligramo': 1000,
                    'microgramo': 1e+6,
                    'tonelada larga': 9.8421e-7,
                    'tonelada corta': 1.1023e-6,
                    'stone': 0.000157473,
                    'libra': 0.00220462,
                    'onza': 0.035274
                },
                'miligramo': {
                    'tonelada': 1e-9,
                    'kilogramo': 1e-6,
                    'gramo': 0.001,
                    'miligramo': 1,
                    'microgramo': 1000,
                    'tonelada larga': 9.8421e-10,
                    'tonelada corta': 1.1023e-9,
                    'stone': 1.5747e-7,
                    'libra': 2.2046e-6,
                    'onza': 3.5274e-5
                },
                'microgramo': {
                    'tonelada': 1e-12,
                    'kilogramo': 1e-9,
                    'gramo': 1e-6,
                    'miligramo': 0.001,
                    'microgramo': 1,
                    'tonelada larga': 9.8421e-13,
                    'tonelada corta': 1.1023e-12,
                    'stone': 1.5747e-10,
                    'libra': 2.2046e-9,
                    'onza': 3.5274e-8
                },
                'tonelada larga': {
                    'tonelada': 1.01605,
                    'kilogramo': 1016.05,
                    'gramo': 1.016e+6,
                    'miligramo': 1.016e+9,
                    'microgramo': 1.016e+12,
                    'tonelada larga': 1,
                    'tonelada corta': 1.12,
                    'stone': 160,
                    'libra': 2240,
                    'onza': 35840
                },
                'tonelada corta': {
                    'tonelada': 0.907185,
                    'kilogramo': 907.185,
                    'gramo': 907185,
                    'miligramo': 9.072e+8,
                    'microgramo': 9.072e+11,
                    'tonelada larga': 0.892857,
                    'tonelada corta': 1,
                    'stone': 142.857,
                    'libra': 2000,
                    'onza': 32000
                },
                'stone': {
                    'tonelada': 0.00635029,
                    'kilogramo': 6.35029,
                    'gramo': 6350.29,
                    'miligramo': 6.35e+6,
                    'microgramo': 6.35e+9,
                    'tonelada larga': 0.00625,
                    'tonelada corta': 0.007,
                    'stone': 1,
                    'libra': 14,
                    'onza': 224
                },
                'libra': {
                    'tonelada': 0.000453592,
                    'kilogramo': 0.453592,
                    'gramo': 453.592,
                    'miligramo': 453592,
                    'microgramo': 4.536e+8,
                    'tonelada larga': 0.000446429,
                    'tonelada corta': 0.0005,
                    'stone': 0.0714286,
                    'libra': 1,
                    'onza': 16
                },
                'onza': {
                    'tonelada': 2.835e-5,
                    'kilogramo': 0.0283495,
                    'gramo': 28.3495,
                    'miligramo': 28349.5,
                    'microgramo': 2.835e+7,
                    'tonelada larga': 2.7902e-5,
                    'tonelada corta': 3.125e-5,
                    'stone': 0.00446429,
                    'libra': 0.0625,
                    'onza': 1
                }
            }
        },
        'Tiempo': {
            'grupo': 'Tiempo',
            'unidades': [
                'nanosegundo',
                'microsegundo',
                'milisegundo',
                'segundo',
                'minuto',
                'hora',
                'dia',
                'semana',
                'mes',
                'año natural',
                'decada',
                'siglo'],
            'equivalencias': {
                'nanosegundo': {
                    'nanosegundo': 1,
                    'microsegundo': 0.001,
                    'milisegundo': 1e-6,
                    'segundo': 1e-9,
                    'minuto': 1.6667e-11,
                    'hora': 2.77783333e-13,
                    'dia': 1.1574e-14,
                    'semana': 1.6534e-15,
                    'mes': 3.8052e-16,
                    'año natural': 3.171e-17,
                    'decada': 3.171e-18,
                    'siglo': 3.171e-19
                },
                'microsegundo': {
                    'nanosegundo': 1000,
                    'microsegundo': 1,
                    'milisegundo': 0.001,
                    'segundo': 1e-6,
                    'minuto': 1.6667e-8,
                    'hora': 2.7778e-10,
                    'dia': 1.1574e-11,
                    'semana': 1.6534e-12,
                    'mes': 3.8052e-13,
                    'año natural': 3.171e-14,
                    'decada': 3.171e-15,
                    'siglo': 3.171e-16
                },
                'milisegundo': {
                    'nanosegundo': 1e+6,
                    'microsegundo': 1000,
                    'milisegundo': 1,
                    'segundo': 0.001,
                    'minuto': 1.6667e-5,
                    'hora': 2.7778e-7,
                    'dia': 1.1574e-8,
                    'semana': 1.6534e-9,
                    'mes': 3.8052e-10,
                    'año natural': 3.171e-11,
                    'decada': 3.171e-12,
                    'siglo': 3.171e-13
                },

                'segundo': {
                    'nanosegundo': 1e+9,
                    'microsegundo': 1e+6,
                    'milisegundo': 1000,
                    'segundo': 1,
                    'minuto': 0.0166667,
                    'hora': 0.000277778,
                    'dia': 1.1574e-5,
                    'semana': 1.6534e-6,
                    'mes': 3.8052e-7,
                    'año natural': 3.171e-8,
                    'decada': 3.171e-9,
                    'siglo': 3.171e-10
                },
                'minuto': {
                    'nanosegundo': 6e+10,
                    'microsegundo': 6e+7,
                    'milisegundo': 60000,
                    'segundo': 60,
                    'minuto': 1,
                    'hora': 0.0166667,
                    'dia': 0.000694444,
                    'semana': 9.9206e-5,
                    'mes': 2.2831e-5,
                    'año natural': 1.9026e-6,
                    'decada': 1.9026e-7,
                    'siglo': 1.9026e-8
                },
                'hora': {
                    'nanosegundo': 3.6e+12,
                    'microsegundo': 3.6e+9,
                    'milisegundo': 3.6e+6,
                    'segundo': 3600,
                    'minuto': 60,
                    'hora': 1,
                    'dia': 0.0416667,
                    'semana': 0.00595238,
                    'mes': 0.00136986,
                    'año natural': 0.000114155,
                    'decada': 1.1416e-5,
                    'siglo': 1.1416e-6
                },
                'dia': {
                    'nanosegundo': 8.64e+13,
                    'microsegundo': 8.64e+10,
                    'milisegundo': 8.64e+7,
                    'segundo': 86400,
                    'minuto': 1440,
                    'hora': 24,
                    'dia': 1,
                    'semana': 0.142857,
                    'mes': 0.0328767,
                    'año natural': 0.00273973,
                    'decada': 0.000273973,
                    'siglo': 2.7397e-5
                },
                'semana': {
                    'nanosegundo': 6.048e+14,
                    'microsegundo': 6.048e+11,
                    'milisegundo': 6.048e+8,
                    'segundo': 604800,
                    'minuto': 10080,
                    'hora': 168,
                    'dia': 7,
                    'semana': 1,
                    'mes': 0.230137,
                    'año natural': 0.0191781,
                    'decada': 0.00191781,
                    'siglo': 0.000191781
                },
                'mes': {
                    'nanosegundo': 2.628e+15,
                    'microsegundo': 2.628e+12,
                    'milisegundo': 2.628e+9,
                    'segundo': 2.628e+6,
                    'minuto': 43800,
                    'hora': 730.001,
                    'dia': 30.4167,
                    'semana': 4.34524,
                    'mes': 1,
                    'año natural': 0.0833334,
                    'decada': 0.00833334,
                    'siglo': 0.000833334
                },
                'año natural': {
                    'nanosegundo': 3.154e+16,
                    'microsegundo': 3.154e+13,
                    'milisegundo': 3.154e+10,
                    'segundo': 3.154e+7,
                    'minuto': 525600,
                    'hora': 8760,
                    'dia': 365,
                    'semana': 52.1429,
                    'mes': 12,
                    'año natural': 1,
                    'decada': 0.1,
                    'siglo': 0.01
                },
                'decada': {
                    'nanosegundo': 3.154e+17,
                    'microsegundo': 3.154e+14,
                    'milisegundo': 3.154e+11,
                    'segundo': 3.154e+8,
                    'minuto': 5.256e+6,
                    'hora': 87600,
                    'dia': 3650,
                    'semana': 521.429,
                    'mes': 120,
                    'año natural': 10,
                    'decada': 1,
                    'siglo': 0.1
                },
                'siglo': {
                    'nanosegundo': 3.154e+18,
                    'microsegundo': 3.154e+15,
                    'milisegundo': 3.154e+12,
                    'segundo': 3.154e+9,
                    'minuto': 5.256e+7,
                    'hora': 876000,
                    'dia': 36500,
                    'semana': 5214.29,
                    'mes': 1200,
                    'año natural': 100,
                    'decada': 10,
                    'siglo': 1
                }
            }
        }
    },
    $inputPrincipal = $('input#principal'),
    $resultado = $('div#resultado'),
    $selectGrupoUnidades = $('select#grupoUnidades'),
    $selectPrimerGrupo = $('select#primeraUnidad'),
    $selectSegundoGrupo = $('select#segundaUnidad'),
    $inputPrimerGrupo = $('input#inputPrimeraUnidad'),
    $inputSegundoGrupo = $('input#inputSegundaUnidad'),
    $ventanaAcercaDe = $('div#acercaDe'),
    $btnAcercaDe = $('button#btn-about'),
    contador = 0,
    segundosCambiaPlaceholder = 1,
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
    $selectGrupoUnidades.change(function () {
        llenaPrimerGrupo($selectPrimerGrupo, $(this).val());
        llenaSegundoGrupo($selectSegundoGrupo, $(this).val());
        $inputPrimerGrupo.val(1);
        $inputPrimerGrupo.keyup();
        convierte($(this).val(), $(this).val(), $inputPrimerGrupo.val(), $selectPrimerGrupo.val(), $selectSegundoGrupo.val());
    });
    llenaSelectUnidades($selectGrupoUnidades);
    $selectPrimerGrupo.change(function () {
        convierte($selectGrupoUnidades.val(), $selectGrupoUnidades.val(), $inputPrimerGrupo.val(), $(this).val(), $selectSegundoGrupo.val());
    });
    $selectSegundoGrupo.change(function () {
        convierte($selectGrupoUnidades.val(), $selectGrupoUnidades.val(), $inputPrimerGrupo.val(), $selectPrimerGrupo.val(), $(this).val());
    });
    $inputPrimerGrupo.keyup(function () {
        convierte($selectGrupoUnidades.val(), $selectGrupoUnidades.val(), $(this).val(), $selectPrimerGrupo.val(), $selectSegundoGrupo.val());
    });
    $inputSegundoGrupo.keyup(function () {
        convierte($selectGrupoUnidades.val(), $selectGrupoUnidades.val(), $(this).val(), $selectPrimerGrupo.val(), $selectSegundoGrupo.val());
    });
    $btnAcercaDe.click(function () {
        $ventanaAcercaDe.modal('show');
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
                                    convierte(grupoUnidad1, grupoUnidad2, primerNumero, primeraUnidad, segundaUnidad);
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
function dameGrupo(unidad) {
    for (var x in unidades) {
        if (unidades[x].unidades.indexOf(unidad) !== -1) {
            return unidades[x].grupo;
        }
    }
    return false;
}
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
    $resultado
        .removeClass('alert-success')
        .addClass('alert-danger');
    $resultado.html(mensaje);
}
function escribeResultado(numero, u1, u2, resultado) {
    var cadenaNumeroUnidades1 = (numero >= 2) ? "Los" : "";
    var primeraUnidadFinal = (numero >= 2) ? u1 + 's' : u2;
    var cadenaSegundaUnidad = (resultado >= 2) ? u2 + 's' : u2;
    var cadenaEquivalencia = (numero >= 2) ? " equivalen " : " equivale ";
    var mensaje = cadenaNumeroUnidades1 + ' '
        + '<strong>' + numero + '</strong>'
        + ' '
        + primeraUnidadFinal
        + cadenaEquivalencia + 'a '
        + '<strong>' + resultado + '</strong>'
        + ' '
        + cadenaSegundaUnidad;
    $resultado
        .removeClass('alert-danger')
        .addClass('alert-success');
    $resultado.html(mensaje);
}

function llenaSelectUnidades(selector) {
    for (var opcion in unidades) {
        selector.append($('<option>', {
            value: opcion,
            text: opcion
        }));
    }
    console.log('¡Grupos de unidades cargados correctamente!');
}
function llenaPrimerGrupo(selector, grupo) {
    selector.empty();
    for (var x in unidades[grupo].unidades) {
        selector.append($('<option>', {
            value: unidades[grupo].unidades[x],
            text: aLetraCapital(unidades[grupo].unidades[x])
        }));
    }
}
function llenaSegundoGrupo(selector, grupo) {
    selector.empty();
    for (var x in unidades[grupo].unidades) {
        selector.append($('<option>', {
            value: unidades[grupo].unidades[x],
            text: aLetraCapital(unidades[grupo].unidades[x])
        }));
    }
}

function aLetraCapital(palabra) {
    return palabra[0].toUpperCase() + palabra.slice(1, palabra.length);
}

function convierte(grupo, grupo2, numero, u1, u2) {
    var resultado = dameEquivalencia(grupo, u1, u2) * numero;
    llenaPrimerGrupo($selectPrimerGrupo, grupo);
    llenaSegundoGrupo($selectSegundoGrupo, grupo2);
    $selectGrupoUnidades.val(grupo);
    $inputPrimerGrupo.val(numero);
    $inputSegundoGrupo.val(resultado);
    $selectPrimerGrupo.val(u1);
    $selectSegundoGrupo.val(u2);
    escribeResultado(numero, u1, u2, resultado);
}
function prueba(abreviacion) {
    for (var ge in abreviaciones) {
        var x = abreviaciones[ge];
        for (var y in x) {
            var xx = abreviaciones[ge][y];
            var gegege = xx.indexOf(abreviacion);
            if (gegege !== -1) {
                console.log(xx);
                console.log(abreviaciones[ge][y]);
                break;
            }
        }
    }
}

