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
    $inputPrincipal.focus();
    setInterval(cambiaPlaceholder, segundosCambiaPlaceholder * 1000);
    $inputPrincipal.keyup(function () {
        compruebaValores($(this).val());
    });
    $selectGrupoUnidades.change(function () {
        llenaPrimerGrupo($selectPrimerGrupo, $(this).val());
        llenaSegundoGrupo($selectSegundoGrupo, $(this).val());
        $inputPrimerGrupo.val(1);
        $inputPrimerGrupo.keyup();
        convierte(
            $(this).val(),
            $(this).val(),
            $inputPrimerGrupo.val(),
            $selectPrimerGrupo.val(),
            $selectSegundoGrupo.val());
    });
    llenaSelectUnidades($selectGrupoUnidades);
    $selectPrimerGrupo.change(function () {
        console.log('cambiado');
        convierte(
            $selectGrupoUnidades.val(),
            $selectGrupoUnidades.val(),
            $inputPrimerGrupo.val(),
            $(this).val(),
            $selectSegundoGrupo.val());
    });
    $selectSegundoGrupo.change(function () {
        convierte(
            $selectGrupoUnidades.val(),
            $selectGrupoUnidades.val(),
            $inputPrimerGrupo.val(),
            $selectPrimerGrupo.val(),
            $(this).val());
    });
    $inputPrimerGrupo.keyup(function () {
        convierte(
            $selectGrupoUnidades.val(),
            $selectGrupoUnidades.val(),
            $(this).val(),
            $selectPrimerGrupo.val(),
            $selectSegundoGrupo.val());
    });
    $inputSegundoGrupo.keyup(function () {
        convierte(
            $selectGrupoUnidades.val(),
            $selectGrupoUnidades.val(),
            $(this).val(),
            $selectPrimerGrupo.val(),
            $selectSegundoGrupo.val());
    });
    $btnAcercaDe.click(function () {
        $ventanaAcercaDe.modal('show');
    });
    $('.ocultable').hide();
}
function compruebaValores(oracion) {
    if (oracion) {
        var oracionCortada = cortaOracion(oracion);
        if (isNaN(oracionCortada)) {
            var numero = oracionCortada.numero,
                unidad1 = oracionCortada.u1.toLowerCase(),
                nexo = oracionCortada.nexo.toLowerCase(),
                unidad2 = oracionCortada.u2.toLowerCase();
            if (!isNaN(numero)) {
                if (numero.length <= limiteLongitudNumeros - 1) {
                    if (unidad1.slice(-1) === 's') {
                        unidad1 = unidad1.slice(0, -1);
                    }
                    if (unidad2.slice(-1) === 's') {
                        unidad2 = unidad2.slice(0, -1);
                    }
                    var grupoUnidad1 = dameGrupo(unidad1),
                        grupoUnidad2 = dameGrupo(unidad2);
                    if (grupoUnidad1 !== false) {
                        if (grupoUnidad2 !== false) {
                            if (grupoUnidad1 === grupoUnidad2) {
                                convierte(grupoUnidad1, grupoUnidad2, numero, unidad1, unidad2);
                                } else {
                                escribeError('Los grupos de unidades no son compatibles: ' + unidad1 + ' y ' + unidad2);
                                }
                            } else {
                            escribeError('La segunda unidad no existe: ' + unidad2);
                            }
                        } else {
                        escribeError('La primera unidad no existe: ' + unidad1);
                        }
                    } else {
                    escribeError('Lo siento, solamente se permiten números de 16 cifras sin incluir el punto decimal');
                    }
                } else {
                escribeError('La primera parte de la oración no es un número: ' + numero);
                }

        } else {
            switch (oracionCortada) {
                case 0:
                    escribeError('No entiendo lo que quieres. Recuerda que debes unir con "en" o "a", por ejemplo "1 milla a metros"');
                    break;
                case 1:
                    escribeError('No entiendo lo que quieres. Recuerda que no debes incluir espacios al inicio');
                    break;
            }
        }
    } else {
        $('.ocultable').hide();
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
function cortaOracion(o) {
    var posicionPrimerNumero = o.indexOf(" ");
    if (posicionPrimerNumero > 0) {
        var primerNumero = o.slice(0, posicionPrimerNumero);
        var posicionNexo;
        var nexo;
        var x;
        for (x in palabrasPermitidas) {
            posicionNexo = o.indexOf(" " + palabrasPermitidas[x] + " ", posicionPrimerNumero + 1);
            if (posicionNexo !== -1) {
                break;
            }
        }
        if (posicionNexo !== -1) {
            nexo = palabrasPermitidas[x];
            var unidad1 = o.slice(posicionPrimerNumero + 1, posicionNexo);
            var unidad2 = o.slice(posicionNexo + 2 + nexo.length, o.length);
            return {
                'numero': primerNumero,
                'nexo': nexo,
                'u1': unidad1,
                'u2': unidad2
            };
        } else {
            return 0;
        }
    } else {
        return 1;
    }

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
    $('.ocultable').hide();
    $resultado
        .removeClass('alert-success')
        .addClass('alert-danger');
    $resultado.html(mensaje);
}
function escribeResultado(numero, u1, u2, resultado) {
    var primeraUnidadFinal = (numero >= 2) ? u1 + 's' : u1;
    var cadenaSegundaUnidad = (resultado >= 2) ? u2 + 's' : u2;
    var cadenaEquivalencia = (numero >= 2) ? " equivalen " : " equivale ";
    var mensaje = '<h5>'
        + '<strong>' + numero + '</strong>'
        + ' '
        + primeraUnidadFinal
        + cadenaEquivalencia + 'a '
        + '<strong>' + resultado + '</strong>'
        + ' '
        + cadenaSegundaUnidad
        + '</h5>';
    $resultado
        .removeClass('alert-danger')
        .addClass('alert-success');
    $resultado.html(mensaje);
    $('.ocultable').show();
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

