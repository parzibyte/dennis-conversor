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
var $inputPrincipal = $('input#principal'),
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

