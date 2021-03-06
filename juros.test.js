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
  const resultadoEsperado = 800
  const resultadoCalculado = juros.montanteJurosSimplesVersao1(C, i, t)
  expect(resultadoCalculado).toBe(resultadoEsperado)
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
  montanteJurosSimples(C, i, t)
  expect(jurosSimples.mock.calls[0]).toEqual([C, i, t])
  expect(montante).toBe(montanteEsperado)
})

test('montanteJurosCompostosTeste1', () => {
  const C = 10
  const i = 0.10
  const t = 1
  const resEsperado = 11
  const resCalculado = juros.montanteJurosCompostos(C, i, t)
  expect(resEsperado).toBe(resCalculado)
})

test('montanteJurosCompostos', () => {
  const C = 1000
  const i = 0.10
  const t = 1
  const montanteEsperado = 1100
  const montanteCalculado = juros.montanteJurosCompostos(C, i, t)
  expect(montanteCalculado).toBe(montanteEsperado)
})

test('jurosCompostos', () => {
  const C = 1000
  const i = 0.10
  const t = 1
  const jurosEsperado = 100
  const montanteJurosCompostos = jest.fn()
  montanteJurosCompostos.mockImplementation(() => 1100)
  const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos })
  const jurosCalculado = jurosCompostos(C, i, t)

  expect(jurosCalculado).toBe(jurosEsperado)
  expect(montanteJurosCompostos.mock.calls[0]).toEqual([C, i, t])
})