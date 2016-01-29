/**
 * Created by Luis Cabrera Benito on 27/01/2016.
 */

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
            }
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
    },
    'Energia': {
        'grupo': 'Energia',
        'unidades': [
            'julio',
            'kilojoule',
            'gram calorie',
            'kilocaloria',
            'vatio-hora',
            'kilovatio-hora',
            'electronvoltio',
            'BTU',
            'US therm',
            'pie-libra fuerza'],
        'equivalencias': {
            'julio': {
                'julio': 1,
                'kilojoule': 0.001,
                'gram calorie': 0.239006,
                'kilocaloria': 0.000239006,
                'vatio-hora': 0.000277778,
                'kilovatio-hora': 2.7778e-7,
                'electronvoltio': 6.242e+18,
                'BTU': 0.000947817,
                'US therm': 9.4804e-9,
                'pie-libra fuerza': 0.737562
            },

            'kilojoule': {
                'julio': 1000,
                'kilojoule': 1,
                'gram calorie': 239.006,
                'kilocaloria': 0.239006,
                'vatio-hora': 0.277778,
                'kilovatio-hora': 0.000277778,
                'electronvoltio': 6.242e+21,
                'BTU': 0.947817,
                'US therm': 9.4804e-6,
                'pie-libra fuerza': 737.562
            },

            'gram calorie': {
                'julio': 4.184,
                'kilojoule': 0.004184,
                'gram calorie': 1,
                'kilocaloria': 0.001,
                'vatio-hora': 0.00116222,
                'kilovatio-hora': 1.1622e-6,
                'electronvoltio': 2.611e+19,
                'BTU': 0.00396567,
                'US therm': 3.9666e-8,
                'pie-libra fuerza': 3.08596
            },

            'kilocaloria': {
                'julio': 4184,
                'kilojoule': 4.184,
                'gram calorie': 1000,
                'kilocaloria': 1,
                'vatio-hora': 1.16222,
                'kilovatio-hora': 0.00116222,
                'electronvoltio': 2.611e+22,
                'BTU': 3.96567,
                'US therm': 3.9666e-5,
                'pie-libra fuerza': 3085.96
            },

            'vatio-hora': {
                'julio': 3600,
                'kilojoule': 3.6,
                'gram calorie': 860.421,
                'kilocaloria': 0.860421,
                'vatio-hora': 1,
                'kilovatio-hora': 0.001,
                'electronvoltio': 2.247e+22,
                'BTU': 3.41214,
                'US therm': 3.413e-5,
                'pie-libra fuerza': 2655.22
            },

            'kilovatio-hora': {
                'julio': 3.6e+6,
                'kilojoule': 3600,
                'gram calorie': 860421,
                'kilocaloria': 860.421,
                'vatio-hora': 1000,
                'kilovatio-hora': 1,
                'electronvoltio': 2.247e+25,
                'BTU': 3412.14,
                'US therm': 0.0341296,
                'pie-libra fuerza': 2.655e+6
            },

            'electronvoltio': {
                'julio': 1.6022e-19,
                'kilojoule': 1.6022e-22,
                'gram calorie': 3.8293e-20,
                'kilocaloria': 3.8293e-23,
                'vatio-hora': 4.4505e-23,
                'kilovatio-hora': 4.4505e-26,
                'electronvoltio': 1,
                'BTU': 1.5186e-22,
                'US therm': 1.5189e-27,
                'pie-libra fuerza': 1.1817e-19
            },

            'BTU': {
                'julio': 1055.06,
                'kilojoule': 1.05506,
                'gram calorie': 252.164,
                'kilocaloria': 0.252164,
                'vatio-hora': 0.293071,
                'kilovatio-hora': 0.000293071,
                'electronvoltio': 6.585e+21,
                'BTU': 1,
                'US therm': 1.0002e-5,
                'pie-libra fuerza': 778.169
            },

            'US therm': {
                'julio': 1.055e+8,
                'kilojoule': 105480,
                'gram calorie': 2.521e+7,
                'kilocaloria': 25210.4,
                'vatio-hora': 29300.1,
                'kilovatio-hora': 29.3001,
                'electronvoltio': 6.584e+26,
                'BTU': 99976.1,
                'US therm': 1,
                'pie-libra fuerza': 7.78e+7
            },

            'pie-libre fuerza': {
                'julio': 1.35582,
                'kilojoule': 0.00135582,
                'gram calorie': 0.324048,
                'kilocaloria': 0.000324048,
                'vatio-hora': 0.000376616,
                'kilovatio-hora': 3.7662e-7,
                'electronvoltio': 8.462e+18,
                'BTU': 0.00128507,
                'US therm': 1.2854e-8,
                'pie-libra fuerza': 1
            }
        }
    },
    'Frecuencia': {
        'grupo': 'Frecuencia',
        'unidades': [
            'hercio',
            'kilohertz',
            'megahercio',
            'gigahercio'],
        'equivalencias': {
            'hercio': {
                'hercio': 1,
                'kilohertz': 0.001,
                'megahercio': 1e-6,
                'gigahercio': 1e-9
            },

            'kilohertz': {
                'hercio': 1000,
                'kilohertz': 1,
                'megahercio': 0.001,
                'gigahercio': 1e-6
            },

            'megahercio': {
                'hercio': 1e+6,
                'kilohertz': 1000,
                'megahercio': 1,
                'gigahercio': 0.001
            },

            'gigahercio': {
                'hercio': 1e+9,
                'kilohertz': 1e+6,
                'megahercio': 1000,
                'gigahercio': 1
            }
        }
    },
    'Presion': {
        'grupo': 'Presion',
        'unidades': [
            'atmosfera',
            'bar',
            'libra por pulgada cuadrada',
            'pascal',
            'torr'],
        'equivalencias': {
            'atmosfera': {
                'atmosfera': 1,
                'bar': 1.01325,
                'libra por pulgada cuadrada': 14.6959,
                'pascal': 101325,
                'torr': 760
            },

            'bar': {
                'atmosfera': 0.986923,
                'bar': 1,
                'libra por pulgada cuadrada': 14.5038,
                'pascal': 100000,
                'torr': 750.062
            },

            'libra por pulgada cuadrada': {
                'atmosfera': 0.068046,
                'bar': 0.0689476,
                'libra por pulgada cuadrada': 1,
                'pascal': 6894.76,
                'torr': 51.7149
            },

            'pascal': {
                'atmosfera': 9.8692e-6,
                'bar': 1e-5,
                'libra por pulgada cuadrada': 0.000145038,
                'pascal': 1,
                'torr': 0.00750062
            },

            'torr': {
                'atmosfera': 0.00131579,
                'bar': 0.00133322,
                'libra por pulgada cuadrada': 0.0193368,
                'pascal': 133.322,
                'torr': 1
            }
        }
    },
    'Tamaño de datos': {
        'grupo': 'Tamaño de datos',
        'unidades': [
            'bit',
            'kilobit',
            'kibibit',
            'megabit',
            'mebibit',
            'gigabit',
            'gibibit',
            'terabit',
            'tebibit',
            'petabit',
            'pebibit',
            'byte',
            'kilobyte',
            'kibibyte',
            'megabyte',
            'mebibyte',
            'gigabyte',
            'gibibyte',
            'terabyte',
            'tebibyte',
            'petabyte',
            'pebibyte'],
        'equivalencias': {
            'bit': {
                'bit': 1,
                'kilobit': 0.001,
                'kibibit': 0.000976563,
                'megabit': 1e-6,
                'mebibit': 9.5367e-7,
                'gigabit': 1e-9,
                'gibibit': 9.3132e-10,
                'terabit': 1e-12,
                'tebibit': 9.0949e-13,
                'petabit': 1e-15,
                'pebibit': 8.8818e-16,
                'byte': 0.125,
                'kilobyte': 0.000125,
                'kibibyte': 0.00012207,
                'megabyte': 1.25e-7,
                'mebibyte': 1.1921e-7,
                'gigabyte': 1.25e-10,
                'gibibyte': 1.1642e-10,
                'terabyte': 1.25e-13,
                'tebibyte': 1.1369e-13,
                'petabyte': 1.25e-16,
                'pebibyte': 1.1102e-16
            },

            'kilobit': {
                'bit': 1000,
                'kilobit': 1,
                'kibibit': 0.976563,
                'megabit': 0.001,
                'mebibit': 0.000953674,
                'gigabit': 1e-6,
                'gibibit': 9.3132e-7,
                'terabit': 1e-9,
                'tebibit': 9.0949e-10,
                'petabit': 1e-12,
                'pebibit': 8.8818e-13,
                'byte': 125,
                'kilobyte': 0.125,
                'kibibyte': 0.12207,
                'megabyte': 0.000125,
                'mebibyte': 0.000119209,
                'gigabyte': 1.25e-7,
                'gibibyte': 1.1642e-7,
                'terabyte': 1.25e-10,
                'tebibyte': 1.1369e-10,
                'petabyte': 1.25e-13,
                'pebibyte': 1.1102e-13
            },

            'kibibit': {
                'bit': 1024,
                'kilobit': 1.024,
                'kibibit': 1,
                'megabit': 0.001024,
                'mebibit': 0.000976563,
                'gigabit': 1.024e-6,
                'gibibit': 9.5367e-7,
                'terabit': 1.024e-9,
                'tebibit': 9.3132e-10,
                'petabit': 1.024e-12,
                'pebibit': 9.0949e-13,
                'byte': 128,
                'kilobyte': 0.128,
                'kibibyte': 0.125,
                'megabyte': 0.000128,
                'mebibyte': 0.00012207,
                'gigabyte': 1.28e-7,
                'gibibyte': 1.1921e-7,
                'terabyte': 1.28e-10,
                'tebibyte': 1.1642e-10,
                'petabyte': 1.28e-13,
                'pebibyte': 1.1369e-13
            },

            'megabit': {
                'bit': 1e+6,
                'kilobit': 1000,
                'kibibit': 976.563,
                'megabit': 1,
                'mebibit': 0.953674,
                'gigabit': 0.001,
                'gibibit': 0.000931323,
                'terabit': 1e-6,
                'tebibit': 9.0949e-7,
                'petabit': 1e-9,
                'pebibit': 8.8818e-10,
                'byte': 125000,
                'kilobyte': 125,
                'kibibyte': 122.07,
                'megabyte': 0.125,
                'mebibyte': 0.119209,
                'gigabyte': 0.000125,
                'gibibyte': 0.000116415,
                'terabyte': 1.25e-7,
                'tebibyte': 1.1369e-7,
                'petabyte': 1.25e-10,
                'pebibyte': 1.1102e-10
            },

            'mebibit': {
                'bit': 1.049e+6,
                'kilobit': 1048.58,
                'kibibit': 1024,
                'megabit': 1.04858,
                'mebibit': 1,
                'gigabit': 0.00104858,
                'gibibit': 0.000976563,
                'terabit': 1.0486e-6,
                'tebibit': 9.5367e-7,
                'petabit': 1.0486e-9,
                'pebibit': 9.3132e-10,
                'byte': 131072,
                'kilobyte': 131.072,
                'kibibyte': 128,
                'megabyte': 0.131072,
                'mebibyte': 0.125,
                'gigabyte': 0.000131072,
                'gibibyte': 0.00012207,
                'terabyte': 1.3107e-7,
                'tebibyte': 1.1921e-7,
                'petabyte': 1.3107e-10,
                'pebibyte': 1.1642e-10
            },

            'gigabit': {
                'bit': 1e+9,
                'kilobit': 1e+6,
                'kibibit': 976563,
                'megabit': 1000,
                'mebibit': 953.674,
                'gigabit': 1,
                'gibibit': 0.931323,
                'terabit': 0.001,
                'tebibit': 0.000909495,
                'petabit': 1e-6,
                'pebibit': 8.8818e-7,
                'byte': 1.25e+8,
                'kilobyte': 125000,
                'kibibyte': 122070,
                'megabyte': 125,
                'mebibyte': 119.209,
                'gigabyte': 0.125,
                'gibibyte': 0.116415,
                'terabyte': 0.000125,
                'tebibyte': 0.000113687,
                'petabyte': 1.25e-7,
                'pebibyte': 1.1102e-7
            },

            'gibibit': {
                'bit': 1.074e+9,
                'kilobit': 1.074e+6,
                'kibibit': 1.049e+6,
                'megabit': 1073.74,
                'mebibit': 1024,
                'gigabit': 1.07374,
                'gibibit': 1,
                'terabit': 0.00107374,
                'tebibit': 0.000976563,
                'petabit': 1.0737e-6,
                'pebibit': 9.5367e-7,
                'byte': 1.342e+8,
                'kilobyte': 134218,
                'kibibyte': 131072,
                'megabyte': 134.218,
                'mebibyte': 128,
                'gigabyte': 0.134218,
                'gibibyte': 0.125,
                'terabyte': 0.000134218,
                'tebibyte': 0.00012207,
                'petabyte': 1.3422e-7,
                'pebibyte': 1.1921e-7
            },

            'terabit': {
                'bit': 1e+12,
                'kilobit': 1e+9,
                'kibibit': 9.766e+8,
                'megabit': 1e+6,
                'mebibit': 953674,
                'gigabit': 1000,
                'gibibit': 931.323,
                'terabit': 1,
                'tebibit': 0.909495,
                'petabit': 0.001,
                'pebibit': 0.000888178,
                'byte': 1.25e+11,
                'kilobyte': 1.25e+8,
                'kibibyte': 1.221e+8,
                'megabyte': 125000,
                'mebibyte': 119209,
                'gigabyte': 125,
                'gibibyte': 116.415,
                'terabyte': 0.125,
                'tebibyte': 0.113687,
                'petabyte': 0.000125,
                'pebibyte': 0.000111022
            },

            'tebibit': {
                'bit': 1.1e+12,
                'kilobit': 1.1e+9,
                'kibibit': 1.074e+9,
                'megabit': 1.1e+6,
                'mebibit': 1.049e+6,
                'gigabit': 1099.51,
                'gibibit': 1024,
                'terabit': 1.09951,
                'tebibit': 1,
                'petabit': 0.00109951,
                'pebibit': 0.000976563,
                'byte': 1.374e+11,
                'kilobyte': 1.342e+8,
                'kibibyte': 1.221e+8,
                'megabyte': 137439,
                'mebibyte': 131072,
                'gigabyte': 137.439,
                'gibibyte': 128,
                'terabyte': 0.137439,
                'tebibyte': 0.125,
                'petabyte': 0.000137439,
                'pebibyte': 0.00012207
            },

            'petabit': {
                'bit': 1e+15,
                'kilobit': 1e+12,
                'kibibit': 9.766e+11,
                'megabit': 1e+9,
                'mebibit': 9.537e+8,
                'gigabit': 1e+6,
                'gibibit': 931323,
                'terabit': 1000,
                'tebibit': 909.495,
                'petabit': 1,
                'pebibit': 0.888178,
                'byte': 1.25e+14,
                'kilobyte': 1.25e+11,
                'kibibyte': 1.221e+11,
                'megabyte': 1.25e+8,
                'mebibyte': 1.192e+8,
                'gigabyte': 125000,
                'gibibyte': 116415,
                'terabyte': 125,
                'tebibyte': 113.687,
                'petabyte': 0.125,
                'pebibyte': 0.111022
            },

            'pebibit': {
                'bit': 1.126e+15,
                'kilobit': 1.126e+12,
                'kibibit': 1.1e+12,
                'megabit': 1.126e+9,
                'mebibit': 1.074e+9,
                'gigabit': 1.126e+6,
                'gibibit': 1.049e+6,
                'terabit': 1125.9,
                'tebibit': 909.495,
                'petabit': 1.1259,
                'pebibit': 1,
                'byte': 1.407e+14,
                'kilobyte': 1.407e+11,
                'kibibyte': 1.374e+11,
                'megabyte': 1.407e+8,
                'mebibyte': 1.342e+8,
                'gigabyte': 140737,
                'gibibyte': 131072,
                'terabyte': 140.737,
                'tebibyte': 128,
                'petabyte': 0.140737,
                'pebibyte': 0.125
            },

            'byte': {
                'bit': 8,
                'kilobit': 0.008,
                'kibibit': 0.0078125,
                'megabit': 8e-6,
                'mebibit': 7.6294e-6,
                'gigabit': 8e-9,
                'gibibit': 7.4506e-9,
                'terabit': 8e-12,
                'tebibit': 7.276e-12,
                'petabit': 8e-15,
                'pebibit': 7.1054e-15,
                'byte': 1,
                'kilobyte': 0.001,
                'kibibyte': 0.000976563,
                'megabyte': 1e-6,
                'mebibyte': 9.5367e-7,
                'gigabyte': 1e-9,
                'gibibyte': 9.3132e-10,
                'terabyte': 1e-12,
                'tebibyte': 9.0949e-13,
                'petabyte': 1e-15,
                'pebibyte': 8.8818e-16
            },

            'kilobyte': {
                'bit': 8000,
                'kilobit': 8,
                'kibibit': 7.8125,
                'megabit': 0.008,
                'mebibit': 0.00762939,
                'gigabit': 8e-6,
                'gibibit': 7.4506e-6,
                'terabit': 8e-9,
                'tebibit': 7.276e-9,
                'petabit': 8e-12,
                'pebibit': 7.1054e-12,
                'byte': 1000,
                'kilobyte': 1,
                'kibibyte': 0.976563,
                'megabyte': 0.001,
                'mebibyte': 0.000953674,
                'gigabyte': 1e-6,
                'gibibyte': 9.3132e-7,
                'terabyte': 1e-9,
                'tebibyte': 9.0949e-10,
                'petabyte': 1e-12,
                'pebibyte': 8.8818e-13
            },

            'kibibyte': {
                'bit': 8192,
                'kilobit': 8.192,
                'kibibit': 8,
                'megabit': 0.008192,
                'mebibit': 0.0078125,
                'gigabit': 8.192e-6,
                'gibibit': 7.6294e-6,
                'terabit': 8.192e-9,
                'tebibit': 8.192e-9,
                'petabit': 8.192e-12,
                'pebibit': 7.276e-12,
                'byte': 1024,
                'kilobyte': 1.024,
                'kibibyte': 1,
                'megabyte': 0.001024,
                'mebibyte': 0.000976563,
                'gigabyte': 1.024e-6,
                'gibibyte': 9.5367e-7,
                'terabyte': 1.024e-9,
                'tebibyte': 9.3132e-10,
                'petabyte': 1.024e-12,
                'pebibyte': 9.0949e-13
            },

            'megabyte': {
                'bit': 8e+6,
                'kilobit': 8000,
                'kibibit': 7812.5,
                'megabit': 8,
                'mebibit': 7.62939,
                'gigabit': 0.008,
                'gibibit': 0.00745058,
                'terabit': 8e-6,
                'tebibit': 7.276e-6,
                'petabit': 8e-9,
                'pebibit': 7.1054e-9,
                'byte': 1e+6,
                'kilobyte': 1000,
                'kibibyte': 976.563,
                'megabyte': 1,
                'mebibyte': 0.953674,
                'gigabyte': 0.001,
                'gibibyte': 0.000931323,
                'terabyte': 1e-6,
                'tebibyte': 9.0949e-7,
                'petabyte': 1e-9,
                'pebibyte': 8.8818e-10
            },

            'mebibyte': {
                'bit': 8.389e+6,
                'kilobit': 8388.61,
                'kibibit': 8192,
                'megabit': 8.38861,
                'mebibit': 8,
                'gigabit': 0.00838861,
                'gibibit': 0.0078125,
                'terabit': 8.3886e-6,
                'tebibit': 7.6294e-6,
                'petabit': 8.3886e-9,
                'pebibit': 7.4506e-9,
                'byte': 1.049e+6,
                'kilobyte': 1048.58,
                'kibibyte': 1024,
                'megabyte': 1.04858,
                'mebibyte': 1,
                'gigabyte': 0.00104858,
                'gibibyte': 0.000976563,
                'terabyte': 1.0486e-6,
                'tebibyte': 9.5367e-7,
                'petabyte': 1.0486e-9,
                'pebibyte': 9.3132e-10
            },

            'gigabyte': {
                'bit': 8e+9,
                'kilobit': 8e+6,
                'kibibit': 7.813e+6,
                'megabit': 8000,
                'mebibit': 7629.39,
                'gigabit': 8,
                'gibibit': 7.45058,
                'terabit': 0.008,
                'tebibit': 0.00727596,
                'petabit': 8e-6,
                'pebibit': 7.1054e-6,
                'byte': 1e+9,
                'kilobyte': 1e+6,
                'kibibyte': 976563,
                'megabyte': 1000,
                'mebibyte': 953.674,
                'gigabyte': 1,
                'gibibyte': 0.931323,
                'terabyte': 0.001,
                'tebibyte': 0.000909495,
                'petabyte': 1e-6,
                'pebibyte': 8.8818e-7
            },

            'gibibyte': {
                'bit': 8.59e+9,
                'kilobit': 8.59e+6,
                'kibibit': 8.389e+6,
                'megabit': 8589.93,
                'mebibit': 8192,
                'gigabit': 8.58993,
                'gibibit': 8,
                'terabit': 0.00858993,
                'tebibit': 0.0078125,
                'petabit': 8.5899e-6,
                'pebibit': 7.6294e-6,
                'byte': 1.074e+9,
                'kilobyte': 1.074e+6,
                'kibibyte': 1.049e+6,
                'megabyte': 1073.74,
                'mebibyte': 1024,
                'gigabyte': 1.07374,
                'gibibyte': 1,
                'terabyte': 0.00107374,
                'tebibyte': 0.000976563,
                'petabyte': 1.0737e-6,
                'pebibyte': 9.5367e-7
            },

            'terabyte': {
                'bit': 8e+12,
                'kilobit': 8e+9,
                'kibibit': 7.813e+9,
                'megabit': 8e+6,
                'mebibit': 7.629e+6,
                'gigabit': 8000,
                'gibibit': 7450.58,
                'terabit': 8,
                'tebibit': 7.27596,
                'petabit': 0.008,
                'pebibit': 0.00710543,
                'byte': 1e+12,
                'kilobyte': 1e+9,
                'kibibyte': 9.766e+8,
                'megabyte': 1e+6,
                'mebibyte': 953674,
                'gigabyte': 1000,
                'gibibyte': 931.323,
                'terabyte': 1,
                'tebibyte': 0.909495,
                'petabyte': 0.001,
                'pebibyte': 0.000888178
            },

            'tebibyte': {
                'bit': 8.796e+12,
                'kilobit': 8.796e+9,
                'kibibit': 8.59e+9,
                'megabit': 8.796e+6,
                'mebibit': 8.389e+6,
                'gigabit': 8796.09,
                'gibibit': 8192,
                'terabit': 8.79609,
                'tebibit': 8,
                'petabit': 0.00879609,
                'pebibit': 0.0078125,
                'byte': 1.1e+12,
                'kilobyte': 1.1e+9,
                'kibibyte': 1.074e+9,
                'megabyte': 1.1e+6,
                'mebibyte': 1.049e+6,
                'gigabyte': 1099.51,
                'gibibyte': 1024,
                'terabyte': 1.09951,
                'tebibyte': 1,
                'petabyte': 0.00109951,
                'pebibyte': 0.000976563
            },

            'petabyte': {
                'bit': 8e+15,
                'kilobit': 8e+12,
                'kibibit': 7.813e+12,
                'megabit': 8e+9,
                'mebibit': 7.629e+9,
                'gigabit': 8e+6,
                'gibibit': 7.451e+6,
                'terabit': 8000,
                'tebibit': 7275.96,
                'petabit': 8,
                'pebibit': 7.10543,
                'byte': 1e+15,
                'kilobyte': 1e+12,
                'kibibyte': 9.766e+11,
                'megabyte': 1e+9,
                'mebibyte': 9.537e+8,
                'gigabyte': 1e+6,
                'gibibyte': 931323,
                'terabyte': 1000,
                'tebibyte': 909.495,
                'petabyte': 1,
                'pebibyte': 0.888178
            },

            'pebibyte': {
                'bit': 9.007e+15,
                'kilobit': 9.007e+12,
                'kibibit': 8.796e+12,
                'megabit': 9.007e+9,
                'mebibit': 8.59e+9,
                'gigabit': 9.007e+6,
                'gibibit': 8.389e+6,
                'terabit': 9007.2,
                'tebibit': 8192,
                'petabit': 9.0072,
                'pebibit': 8,
                'byte': 1.126e+15,
                'kilobyte': 1.126e+12,
                'kibibyte': 1.1e+12,
                'megabyte': 1.126e+9,
                'mebibyte': 1.074e+9,
                'gigabyte': 1.126e+6,
                'gibibyte': 1.049e+6,
                'terabyte': 1125.9,
                'tebibyte': 1024,
                'petabyte': 1.1259,
                'pebibyte': 1
            }
        }
    },
    'Velocidad': {
        'grupo': 'Velocidad',
        'unidades': [
            'milla por hora',
            'pies por segundo',
            'metro por segundo',
            'kilometro por hora',
            'nudo'
        ],
        'equivalencias': {
            'milla por hora': {
                'milla por hora': 1,
                'pies por segundo': 1.46667,
                'metro por segundo': 0.44704,
                'kilometro por hora': 1.60934,
                'nudo': 0.868976
            },
            'pies por segundo': {
                'milla por hora': 0.681818,
                'pies por segundo': 1,
                'metro por segundo': 0.3048,
                'kilometro por hora': 1.09728,
                'nudo': 0.592484
            },
            'metro por segundo': {
                'milla por hora': 2.23694,
                'pies por segundo': 3.28084,
                'metro por segundo': 1,
                'kilometro por hora': 3.6,
                'nudo': 1.94384
            },
            'kilometro por hora': {
                'milla por hora': 0.621371,
                'pies por segundo': 0.911344,
                'metro por segundo': 0.277778,
                'kilometro por hora': 1,
                'nudo': 0.539957
            },
            'nudo': {
                'milla por hora': 1.15078,
                'pies por segundo': 1.68781,
                'metro por segundo': 0.514444,
                'kilometro por hora': 1.852,
                'nudo': 1
            }
        }
    },
    'Volumen': {
        'grupo': 'Volumen',
        'unidades': [
            'metro cubico',
            'litro',
            'mililitro',
            'pie cubico',
            'pulgada cubica'
        ],
        'equivalencias': {
            'metro cubico': {
                'metro cubico': 1,
                'litro': 1000,
                'mililitro': 1e+6,
                'pie cubico': 35.3147,
                'pulgada cubica': 61023.7
            },
            'litro': {
                'metro cubico': 0.001,
                'litro': 1,
                'mililitro': 1000,
                'pie cubico': 0.0353147,
                'pulgada cubica': 61.0237
            },
            'mililitro': {
                'metro cubico': 1e-6,
                'litro': 0.001,
                'mililitro': 1,
                'pie cubico': 3.5315e-5,
                'pulgada cubica': 0.0610237
            },
            'pie cubico': {
                'metro cubico': 0.0283168,
                'litro': 28.3168,
                'mililitro': 28316.8,
                'pie cubico': 1,
                'pulgada cubica': 1728
            },
            'pulgada cubica': {
                'metro cubico': 1.6387e-5,
                'litro': 0.0163871,
                'mililitro': 16.3871,
                'pie cubico': 0.000578704,
                'pulgada cubica': 1
            }
        }
    },
    'Temperatura': {
        'grupo': 'Temperatura',
        'unidades': [
            'grado celsius',
            'grado fahrenheit',
            'kelvin'
        ],
        'equivalencias': {
            'grado celsius': {
                'grado celsius': 1,
                'grado fahrenheit': 33.8,
                'kelvin': 274.15
            },
            'grado fahrenheit': {
                'grado celsius': -17.2222,
                'grado fahrenheit': 1,
                'kelvin': 255.928
            },
            'kelvin': {
                'grado celsius': -272.15,
                'grado fahrenheit': -457.87,
                'kelvin': 1
            }
        }
    },
    'Area': {
        'grupo': 'Area',
        'unidades': [
            'kilometro cuadrado',
            'metro cuadrado',
            'milla cuadrada',
            'yarda cuadrada',
            'pie cuadrado',
            'pulgada cuadrada',
            'hectarea',
            'acre'
        ],
        'equivalencias': {
            'kilometro cuadrado': {
                'kilometro cuadrado': 1,
                'metro cuadrado': 1e+6,
                'milla cuadrada': 0.386102,
                'yarda cuadrada': 1.196e+6,
                'pie cuadrado': 1.076e+7,
                'pulgada cuadrada': 1.55e+9,
                'hectarea': 100,
                'acre': 247.105
            },

            'metro cuadrado': {
                'kilometro cuadrado': 1e-6,
                'metro cuadrado': 1,
                'milla cuadrada': 3.861e-7,
                'yarda cuadrada': 1.19599,
                'pie cuadrado': 10.7639,
                'pulgada cuadrada': 1550,
                'hectarea': 1e-4,
                'acre': 0.000247105
            },

            'milla cuadrada': {
                'kilometro cuadrado': 2.58999,
                'metro cuadrado': 2.59e+6,
                'milla cuadrada': 1,
                'yarda cuadrada': 3.098e+6,
                'pie cuadrado': 2.788e+7,
                'pulgada cuadrada': 4.014e+9,
                'hectarea': 258.999,
                'acre': 640
            },

            'yarda cuadrada': {
                'kilometro cuadrado': 8.3613e-7,
                'metro cuadrado': 0.836127,
                'milla cuadrada': 3.2283e-7,
                'yarda cuadrada': 1,
                'pie cuadrado': 9,
                'pulgada cuadrada': 1296,
                'hectarea': 8.3613e-5,
                'acre': 0.000206612
            },

            'pie cuadrado': {
                'kilometro cuadrado': 9.2903e-8,
                'metro cuadrado': 0.092903,
                'milla cuadrada': 3.587e-8,
                'yarda cuadrada': 0.111111,
                'pie cuadrado': 1,
                'pulgada cuadrada': 144,
                'hectarea': 9.2903e-6,
                'acre': 2.2957e-5
            },

            'pulgada cuadrada': {
                'kilometro cuadrado': 6.4516e-10,
                'metro cuadrado': 0.00064516,
                'milla cuadrada': 2.491e-10,
                'yarda cuadrada': 0.000771605,
                'pie cuadrado': 0.00694444,
                'pulgada cuadrada': 1,
                'hectarea': 6.4516e-8,
                'acre': 1.5942e-7
            },

            'hectarea': {
                'kilometro cuadrado': 0.01,
                'metro cuadrado': 10000,
                'milla cuadrada': 0.00386102,
                'yarda cuadrada': 11959.9,
                'pie cuadrado': 107639,
                'pulgada cuadrada': 1.55e+7,
                'hectarea': 1,
                'acre': 2.47105
            },

            'acre': {
                'kilometro cuadrado': 0.00404686,
                'metro cuadrado': 4046.86,
                'milla cuadrada': 0.0015625,
                'yarda cuadrada': 4840,
                'pie cuadrado': 43560,
                'pulgada cuadrada': 6.273e+6,
                'hectarea': 0.404686,
                'acre': 1
            }
        }
    }
};