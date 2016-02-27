/**
 * Created by Luis Cabrera Benito on 25/01/2016.
 */
$(document).ready(function () {
    principal();
    $selectPrimerGrupo.val('metro');
});
var $inputPrincipal = $('input#principal'),
    $resultado = $('div#resultado'),
    $selectGrupoUnidades = $('select#grupoUnidades'),
    $selectPrimerGrupo = $('select#primeraUnidad'),
    $selectSegundoGrupo = $('select#segundaUnidad'),
    $inputPrimerGrupo = $('input#inputPrimeraUnidad'),
    $inputSegundoGrupo = $('input#inputSegundaUnidad'),
    $btnEjemplo = $('button#mostrarEjemplo'),
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
function aLetraCapital(palabra) {
    return palabra[0].toUpperCase() + palabra.slice(1, palabra.length);
}

function cambiaPlaceholder() {
    if (contador < sugerencias.length) {
        $inputPrincipal.attr('placeholder', sugerencias[contador]);
        contador++;
    } else {
        contador = 0;
    }
}

function compruebaValores(oracion) {
    if (oracion) {
        var oracionCortada = cortaOracion(oracion);
        if (isNaN(oracionCortada)) {
            var numero = oracionCortada.numero,
                unidad1 = oracionCortada.u1.toLowerCase(),
                unidad2 = oracionCortada.u2.toLowerCase();
            if (!isNaN(numero)) {
                if (numero.length <= limiteLongitudNumeros - 1) {
                    if (dameGrupo(unidad1) === false) {
                        unidad1 = unidad1.slice(0, -1);
                    }
                    if (dameGrupo(unidad2) === false) {
                        unidad2 = unidad2.slice(0, -1);
                    }
                    var grupoUnidad1 = dameGrupo(unidad1),
                        grupoUnidad2 = dameGrupo(unidad2);
                    if (grupoUnidad1 !== false) {
                        if (grupoUnidad2 !== false) {
                            if (grupoUnidad1 === grupoUnidad2) {
                                convierte(grupoUnidad1, grupoUnidad2, numero, unidad1, unidad2, false);
                            } else {
                                escribeError('Los grupos de unidades no son compatibles: <strong>' + unidad1 + ' y ' + unidad2 + '</strong>');
                            }
                        } else {
                            escribeError('La segunda unidad no existe: <strong>' + unidad2 + '</strong>');
                        }
                    } else {
                        escribeError('La primera unidad no existe: <strong>' + unidad1 + '</strong>');
                    }
                } else {
                    escribeError('Lo siento, solamente se permiten números de <strong>16 cifras</strong> sin incluir el punto decimal');
                }
            } else {
                escribeError('La primera parte de la oración no es un número: <strong>' + numero + '</strong>');
            }

        } else {
            switch (oracionCortada) {
                case 0:
                    escribeError('No entiendo lo que quieres. Recuerda que debes unir con "en" o "a", por ejemplo "1 milla <strong>a</strong> metros"');
                    break;
                case 1:
                    escribeError('No entiendo lo que quieres. Recuerda que no debes <strong>incluir espacios</strong> al inicio');
                    break;
            }
        }
    } else {
        $('.ocultable').hide();
    }
}

function convierte(grupo, grupo2, numero, u1, u2, esDelSegundoInput) {
    var resultado = dameEquivalencia(grupo, u1, u2) * numero;
    if (grupo === "Temperatura") {
        resultado = grados(grupo, u1, u2, numero);
    }
    llenaPrimerGrupo($selectPrimerGrupo, grupo);
    llenaSegundoGrupo($selectSegundoGrupo, grupo2);
    $selectGrupoUnidades.val(grupo);
    if (esDelSegundoInput) {

        $inputPrimerGrupo.val(resultado);
        $inputSegundoGrupo.val(numero);
        $selectPrimerGrupo.val(u2);
        $selectSegundoGrupo.val(u1);
    } else {

        $inputPrimerGrupo.val(numero);
        $inputSegundoGrupo.val(resultado);
        $selectPrimerGrupo.val(u1);
        $selectSegundoGrupo.val(u2);
    }
    escribeResultado(numero, u1, u2, resultado);
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

function dameEquivalencia(grupo, u1, u2) {

    return unidades[grupo].equivalencias[u1][u2];
}

function dameGrupo(unidad) {
    for (var x in unidades) {
        if (unidades[x].unidades.indexOf(unidad) !== -1) {
            return unidades[x].grupo;
        }
    }
    return false;
}

function escribeError(mensaje) {
    $('.ocultable').hide();
    $resultado
        .removeClass('alert-success')
        .addClass('alert-danger');
    $resultado.html('<h5>' + mensaje + '</h5>');
}

function escribeResultado(numero, u1, u2, resultado) {
    var primeraUnidadFinal = (numero === 1) ? u1 : u1 + 's';
    var cadenaSegundaUnidad = (resultado === 1) ? u2 : u2 + 's';
    var cadenaEquivalencia = (numero === 1) ? " equivale " : " equivalen ";
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

function escuchaElementos() {
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
            $selectSegundoGrupo.val(), false);
    });
    $selectPrimerGrupo.change(function () {
        convierte(
            $selectGrupoUnidades.val(),
            $selectGrupoUnidades.val(),
            $inputPrimerGrupo.val(),
            $(this).val(),
            $selectSegundoGrupo.val(), false);
    });
    $selectSegundoGrupo.change(function () {
        convierte(
            $selectGrupoUnidades.val(),
            $selectGrupoUnidades.val(),
            $inputPrimerGrupo.val(),
            $selectPrimerGrupo.val(),
            $(this).val(), false);
    });
    $inputPrimerGrupo.keyup(function () {
        if (!isNaN($(this).val())) {
            if ($(this).val()) {
                if ($(this).val().length <= limiteLongitudNumeros - 1) {
                    convierte(
                        $selectGrupoUnidades.val(),
                        $selectGrupoUnidades.val(),
                        $(this).val(),
                        $selectPrimerGrupo.val(),
                        $selectSegundoGrupo.val(), false);
                } else {
                    escribeError('Lo siento, solamente se permiten números de <strong>16 cifras</strong> sin incluir el punto decimal');

                    $('.ocultable').show();
                }
            }
        } else {
            escribeError('Ingresa un número en la caja de texto número 1');
            $('.ocultable').show();
        }

    });
    $inputSegundoGrupo.keyup(function () {
        if (!isNaN($(this).val())) {
            if ($(this).val()) {
                if ($(this).val().length <= limiteLongitudNumeros - 1) {
                    convierte(
                        $selectGrupoUnidades.val(),
                        $selectGrupoUnidades.val(),
                        $(this).val(),
                        $selectSegundoGrupo.val(),
                        $selectPrimerGrupo.val(), true);
                } else {
                    escribeError('Lo siento, solamente se permiten números de <strong>16 cifras</strong> sin incluir el punto decimal');
                    $('.ocultable').show();
                }
            }
        } else {
            escribeError('Ingresa un número en la caja de texto número 2');
            $('.ocultable').show();
        }

    });
    $btnAcercaDe.click(function () {
        $ventanaAcercaDe.modal('show');
    });
    $inputPrincipal.keyup(function () {
        compruebaValores($(this).val());
    });
    $btnEjemplo.click(function () {

        $('div#manual').modal('show');
    });
}

function grados(grupo, u1, u2, numero) {
    if (grupo === "Temperatura") {
        switch (u1) {
            case "grado fahrenheit":
                switch (u2) {
                    case "grado fahrenheit":
                        return numero;
                        break;
                    case "grado celsius":
                        return (numero - 32) * (5 / 9);
                        break;
                    case "kelvin":
                        return ((5 * (numero - 32)) / 9) + 273.15;
                        break;
                }
                break;
            case "grado celsius":
                switch (u2) {
                    case "grado fahrenheit":
                        return 32 + ((9 / 5) * numero );
                        break;
                    case "grado celsius":
                        return numero;
                        break;
                    case "kelvin":
                        return numero + 273.15;
                        break;
                }
                break;
            case "kelvin":
                switch (u2) {
                    case "grado fahrenheit":
                        return ((9 * (numero - 273.15)) / 5) + 32;
                        break;
                    case "grado celsius":
                        return numero - 273.15;
                        break;
                    case "kelvin":
                        return numero;
                        break;
                }
                break;
        }
    }
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

function llenaSelectUnidades(selector) {
    for (var opcion in unidades) {
        selector.append($('<option>', {
            value: opcion,
            text: opcion
        }));
    }
}

function principal() {
    $inputPrincipal.focus();
    setInterval(cambiaPlaceholder, segundosCambiaPlaceholder * 1000);
    llenaSelectUnidades($selectGrupoUnidades);
    escuchaElementos();
    $('.ocultable').hide();
}