import { expect } from 'chai'
import Calculadora from '../src/Calculadora.js'

describe('Teste de soma', () =>{
    it('Deve somar 4 e 5 e resultar 9', () => {
        let resultado = Calculadora.soma(4,5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 e resultar 1', () => {
        let resultado = Calculadora.soma(-4,5)
        expect(resultado).to.be.eq(1)
    })
})

describe('Teste de subtração', () =>{
    it('Deve subtrair 4 e 5 e resultar -1', () => {
        let resultado = Calculadora.subtracao(4,5)
        expect(resultado).to.be.eq(-1)
    })
})

describe('Teste de multiplicação', () =>{
    it('Deve multiplicar 4 e 5 e resultar 20', () => {
        let resultado = Calculadora.multiplicacao(4,5)
        expect(resultado).to.be.eq(20)
    })
})

describe('Teste de divisão', () =>{
    it('Deve dividir 20 por 5 e resultar 4', () => {
        let resultado = Calculadora.divisao(20,5)
        expect(resultado).to.be.eq(4)
    })
    it('Deve dividir 20 por 0 e retornar "Não é possível dividir por zero"', () => {
        let resultado = Calculadora.divisao(20,0)
        expect(resultado).to.be.eq('Não é possível dividir por zero')
    })
})

describe('Teste de raiz', () =>{
    it('Deve achar a raiz de 25', () => {
        let resultado = Calculadora.raiz(25)
        expect(resultado).to.be.eq(5)
    })
    it('Deve achar a raiz de -1', () => {
        let resultado = Calculadora.raiz(-1)
        expect(resultado).to.be.eq('Não existe raiz de número negativo')
    })
})

describe('Teste de conversor de temperatura', () =>{
    it('Deve converter de Celcius para Kelvin', () => {
        let resultado = Calculadora.conversorTemp(0, 'Celcius', 'Kelvin');
        expect(resultado).to.be.equal(273.15);
    })

    it('Deve converter de Celcius para Fahrenheit', () => {
        let resultado = Calculadora.conversorTemp(0, 'Celcius', 'Fahrenheit');
        expect(resultado).to.be.equal(32);
    })

    it('Deve converter de Fahrenheit para Celcius', () => {
        let resultado = Calculadora.conversorTemp(45, 'Fahrenheit', 'Celcius');
        expect(resultado).to.be.equal(7.22);
    })

    it('Deve converter de Fahrenheit para Kelvin', () => {
        let resultado = Calculadora.conversorTemp(40, 'Fahrenheit', 'Kelvin');
        expect(resultado).to.be.equal(277.59);
    })

    it('Deve converter de Kelvin para Celcius', () => {
        let resultado = Calculadora.conversorTemp(455, 'Kelvin', 'Celcius');
        expect(resultado).to.be.equal(181.85);
    })

    it('Deve converter de Kelvin para Fahrenheit', () => {
        let resultado = Calculadora.conversorTemp(300, 'Kelvin', 'Fahrenheit');
        expect(resultado).to.be.equal(80.33);
    })

    it('Deve retornar o mesmo valor', () => {
        let resultado = Calculadora.conversorTemp(120, 'Celcius', 'Celcius');
        expect(resultado).to.be.equal(120);
    })
})

describe('Teste de fatorial', () =>{
    it('Deve achar o fatorial de 1', () => {
        let resultado = Calculadora.fatorial(1)
        expect(resultado).to.be.eq(1)
    })
    it('Deve achar o fatorial de 0', () => {
        let resultado = Calculadora.fatorial(0)
        expect(resultado).to.be.eq(1)
    })
    it('Deve achar o fatorial de 5', () => {
        let resultado = Calculadora.fatorial(5)
        expect(resultado).to.be.eq(120)
    })
    it('Deve achar o fatorial de -5', () => {
        let resultado = Calculadora.fatorial(-5)
        expect(resultado).to.be.eq('Não existe fatorial de número negativo')
    })
})

describe('Teste de hipotenusa', () =>{
    it('Deve achar hipotenusa de catetos 3 e 4', () => {
        let resultado = Calculadora.hipotenusa(3,4)
        expect(resultado).to.be.eq(5)
    })
    it('Deve achar hipotenusa de catetos -3 e 4', () => {
        let resultado = Calculadora.hipotenusa(-3,4)
        expect(resultado).to.be.eq('Não existe cateto negativo')
    })
    it('Deve achar hipotenusa de catetos 3 e -4', () => {
        let resultado = Calculadora.hipotenusa(3,-4)
        expect(resultado).to.be.eq('Não existe cateto negativo')
    })
})

describe('Teste de ordem crescente', () => {
    const casosDeTeste = [
      { numeros: [3, 4], resultadoEsperado: [3, 4] },
      { numeros: [4, 3, 2, 1], resultadoEsperado: [1, 2, 3, 4] },
      { numeros: [48, -5, -3, 6], resultadoEsperado: [-5, -3, 6, 48] },
    ];
  
    casosDeTeste.forEach(caso => {
      it(`Deve achar a ordem ${caso.numeros}`, () => {
        const resultado = Calculadora.ordemCrescente([...caso.numeros]);
        expect(resultado).to.be.eql(caso.resultadoEsperado);
      });
    });
});

describe('Teste de ordem decrescente', () => {
    const casosDeTeste = [
      { numeros: [4, 3], resultadoEsperado: [4, 3] },
      { numeros: [1, 3, 2, 1], resultadoEsperado: [3, 2, 1, 1] },
      { numeros: [4, -5, -3, 6], resultadoEsperado: [6, 4, -3, -5] },
    ];
  
    casosDeTeste.forEach(caso => {
      it(`Deve achar a ordem ${caso.numeros}`, () => {
        const resultado = Calculadora.ordemDecrescente([...caso.numeros]);
        expect(resultado).to.be.eql(caso.resultadoEsperado);
      });
    });
});

describe('Teste de conversor de tempo', () => {
    it('Deve converter de anos para dias', () => {
      let resultado = Calculadora.converterTempo(1, 'ano', 'dia');
      expect(resultado).to.be.eql(365);
    });
  
    it('Deve converter de mes para semanas', () => {
      let resultado = Calculadora.converterTempo(1, 'mes', 'semana');
      expect(resultado).to.be.eql(4);
    });
  
    it('Deve converter de semanas para horas', () => {
      let resultado = Calculadora.converterTempo(2, 'semana', 'hora');
      expect(resultado).to.be.eql(336);
    });
  
    it('Deve converter de dias para horas', () => {
      let resultado = Calculadora.converterTempo(1, 'dia', 'hora');
      expect(resultado).to.be.eql(24);
    });
  
    it('Deve converter de ano para minutos', () => {
      let resultado = Calculadora.converterTempo(1, 'ano', 'minuto');
      expect(resultado).to.be.eql(525600);
    });
  
    it('Deve converter de minutos para segundos', () => {
      let resultado = Calculadora.converterTempo(5, 'minuto', 'segundo');
      expect(resultado).to.be.eql(300);
    });
  
    it('Deve retornar o mesmo valor', () => {
      let resultado = Calculadora.converterTempo(10, 'hora', 'hora');
      expect(resultado).to.be.eql(10);
    });
  });