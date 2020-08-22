/*
===== Exercício 1: Juros Simples =====
Crie um módulo juros.js, e exporte dele uma função jurosSimples que recebe C (capital),
i (juros em decimal. ex: 3,5% = 0.035) e t (tempo). E retorne o juros simples do período (C * i * t ).
*/

const jurosSimples = (C, i, t) => C * i * t


/*
===== Exercício 2: Montante com Juros Simples =====
Crie uma nova função que, dado as mesmas variáveis do exercício anterior,
retorne o montante total C + juros simples.
*/

const montanteJurosSimples = ({ jurosSimples }) => (C, i, t) => C + jurosSimples(C, i, t)


/*
===== Exercício 3: Montante com Juros Compostos =====
Crie uma função montanteJurosCompostos que recebe C (capital), i (juros em decimal) e t (tempo)
e retorno o montante para o período, dado pela fórmula: M = C * (1 +  i) ^ t​.
*/

const montanteJurosCompostos = (C, i, t) => C * Math.pow((1+i), t)


/*
===== Exercício 4: juros compostos =====
O exercício anterior já retorna o montante (capital + juros).
Crie uma função em juros.js que retorne somente os juros.
*/

const jurosCompostos = ({ montanteJurosCompostos }) => (C, i, t) => montanteJurosCompostos(C, i, t) - C


module.exports = {
  jurosSimples,
  montanteJurosSimples: montanteJurosSimples({ jurosSimples }),
  montanteJurosCompostos,
  jurosCompostos: jurosCompostos({ montanteJurosCompostos }),
  pure: {
    montanteJurosSimples,
    jurosCompostos
  }
}