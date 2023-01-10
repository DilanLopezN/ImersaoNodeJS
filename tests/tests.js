import { obterDados } from './service.js'
import assert from 'node:assert'

describe('Star Wars', function () {
  it('deve buscar r2d2 com formato correto', async () => {
    const expected = [{ nome: 'RD-D2', peso: '96' }]
    const nomeBase = `r2-d2`

    const resultado = await obterDados(nomeBase)
    console.log(resultado)

    assert.deepEqual(resultado, expected)
  })
})
