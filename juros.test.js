const juros = require('./juros')

test('jurosSimples', () => {
  const C = 100
  const i = 0.10
  const t = 1
  const juroEsperado = 10
  const juroCalculado = juros.jurosSimples(C, i, t)
  expect(juroCalculado).toBe(juroEsperado)
})

test('jurosSimples', () => {
  const C = 100
  const i = 0.10
  const t = 0
  const juroEsperado = 0
  const juroCalculado = juros.jurosSimples(C, i, t)
  expect(juroCalculado).toBe(juroEsperado)
})

test('jurosSimples', () => {
  const C = 100
  const i = 0.10
  const t = 10
  const juroEsperado = 100
  const juroCalculado = juros.jurosSimples(C, i, t)
  expect(juroCalculado).toBe(juroEsperado)
})

test('montanteJurosSimples', () => {
  const C = 100
  const i = 0.10
  const t = 2
  const montanteEsperado = 120
  const jurosSimples = jest.fn()
  jurosSimples.mockImplementation(() => 20)
  const montanteJurosSimples = juros.pure.montanteJurosSimples({ jurosSimples })
  const montante = montanteJurosSimples(C, i, t)
  expect(jurosSimples.mock.calls[0]).toEqual([C, i, t])
  expect(montante).toBe(montanteEsperado)
})

test('montanteJurosCompostos', () => {
  const C = 1000
  const i = 0.10
  const t = 1
  const juroEsperado = 1100
  const juroCalculado = juros.montanteJurosCompostos(C, i, t)
  expect(juroCalculado).toBe(juroEsperado)
})

test('jurosCompostos', () => {
  const C = 1000
  const i = 0.10
  const t = 1  
  const montanteJurosCompostos = jest.fn()
  montanteJurosCompostos.mockImplementation(() => 1200)
  const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos })
  const juroCalculado = jurosCompostos(C, i, t)
  expect(montanteJurosCompostos.mock.calls[0]).toEqual([C, i, t])
  expect(juroCalculado).toBe(200)
})