
export default class Calculadora{

    static soma(a,b){
        return a + b
    }

    static subtracao(a,b){
        return a - b
    }

    static multiplicacao(a, b) {
        return a * b;
    }

    static divisao(a, b) {
        if(b == 0)
            return 'Não é possível dividir por zero'
        return a / b
    }

    static raiz(a){
        if(a < 0)
            return 'Não existe raiz de número negativo'
        return Math.sqrt(a)
    }

    static conversorTemp(numero, unidadeOrigem, unidadeDestino) {
        
        const caso = unidadeOrigem + '-' + unidadeDestino;
        let resultado;

        switch(caso) {
            case 'Celcius-Kelvin':
                resultado = numero + 273.15
                break
            case 'Celcius-Fahrenheit':
                resultado = (9 * numero) / 5 + 32
                break
            case 'Fahrenheit-Celcius':
                resultado = (5 * (numero - 32)) / 9
                break
            case 'Fahrenheit-Kelvin':
                resultado = (5 * (numero - 32)) / 9 + 273.15
                break
            case 'Kelvin-Celcius':
                resultado = numero - 273.15
                break
            case 'Kelvin-Fahrenheit':
                resultado = (9 * (numero - 273.15)) / 5 + 32
                break
            default:
                return numero;
        }

        return parseFloat(resultado.toFixed(2));
    }

    static fatorial(a) {
        if(a < 0)
            return 'Não existe fatorial de número negativo'
        if(a == 0 || a == 1)
            return 1
        return a * this.fatorial(a - 1);
    }

    static hipotenusa(a,b){
        if(a < 0 || b < 0)
            return 'Não existe cateto negativo'
        let somaQuadrados = (a*a) + (b*b)
        let resultado = this.raiz(somaQuadrados)
        return resultado
    }

    static ordemCrescente(numeros) {
        let n = numeros.length;
        for(let i = 0; i < n - 1; i++) {
            for(let j = 0; j < n - i - 1; j++) {
                if(numeros[j] > numeros[j + 1]) {
                    let aux = numeros[j];
                    numeros[j] = numeros[j + 1];
                    numeros[j + 1] = aux;
                }
            }
        }
        return numeros;
    }

    static ordemDecrescente(numeros) {
        let n = numeros.length;
        for(let i = 0; i < n - 1; i++) {
            for(let j = 0; j < n - i - 1; j++) {
                if(numeros[j] < numeros[j + 1]) {
                    let aux = numeros[j];
                    numeros[j] = numeros[j + 1];
                    numeros[j + 1] = aux;
                }
            }
        }
        return numeros;
    }

    static converterTempo(numero, unidadeOrigem, unidadeDestino) {
        const unidades = {
          ano: 31536000,
          mes: 2628000,
          semana: 604800,
          dia: 86400,
          hora: 3600,
          minuto: 60,
          segundo: 1,
        };
      
        const segundos = numero * unidades[unidadeOrigem];
        let resultado;
      
        switch(unidadeDestino) {
          case 'ano':
            resultado = segundos / unidades.ano
            break
          case 'mes':
            resultado = segundos / unidades.mes
            break
          case 'semana':
            resultado = segundos / unidades.semana
            break
          case 'dia':
            resultado = segundos / unidades.dia
            break
          case 'hora':
            resultado = segundos / unidades.hora
            break
          case 'minuto':
            resultado = segundos / unidades.minuto
            break
          case 'segundo':
            resultado = segundos
            break
          default:
            return numero
        }

        return parseFloat(resultado.toFixed(0));
    }

}