const juros = require('./juros')

test('jurosSimplesTeste1', function () {
  const C = 200
  const i = 0.10
  const t = 30
  const esperado = 600
  const calculadoPelaFunction = juros.jurosSimples(C, i, t)
  expect(calculadoPelaFunction).toBe(esperado)
})

test('jurosSimplesTeste2', () => {
  const C = 1000
  const i = 0.005
  const t = 30
  const esperado = 150
  const resultado = juros.jurosSimples(C, i, t)
  expect(resultado).toBe(esperado)
})

test('jurosSimplesTeste3', () => {
  expect(juros.jurosSimples(100, 0.05, 10)).toBe(50)
})

test('montanteJurosSimples1', () => {
  const C = 200
  const i = 0.10
  const t = 30
  const resultadoEsperado = (800)
  const resultadoCalculado = juros.montanteJurosSimples(C, i, t)
  console.log(resultadoEsperado, resultadoCalculado)
  expect(resultadoCalculado).toBe(resultadoEsperado)
})

// test('montanteJurosSimples', () => {
//   const C = 100
//   const i = 0.10
//   const t = 2
//   const montanteEsperado = 120
//   const jurosSimples = jest.fn()
//   jurosSimples.mockImplementation(() => 20)
//   const montanteJurosSimples = juros.pure.montanteJurosSimples({ jurosSimples })
//   const montante = montanteJurosSimples(C, i, t)
//   expect(jurosSimples.mock.calls[0]).toEqual([C, i, t])
//   expect(montante).toBe(montanteEsperado)
// })

// test('montanteJurosCompostos', () => {
//   const C = 1000
//   const i = 0.10
//   const t = 1
//   const juroEsperado = 1100
//   const juroCalculado = juros.montanteJurosCompostos(C, i, t)
//   expect(juroCalculado).toBe(juroEsperado)
// })

// test('jurosCompostos', () => {
//   const C = 1000
//   const i = 0.10
//   const t = 1  
//   const montanteJurosCompostos = jest.fn()
//   montanteJurosCompostos.mockImplementation(() => 1200)
//   const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos })
//   const juroCalculado = jurosCompostos(C, i, t)
//   expect(montanteJurosCompostos.mock.calls[0]).toEqual([C, i, t])
//   expect(juroCalculado).toBe(200)
// })