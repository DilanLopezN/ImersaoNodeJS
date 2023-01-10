import { deepEqual, ok } from 'node:assert'
const DEFAULT_ITEM_CADASTRAR = { nome: 'Flash', poder: 'speed', id: 1 }
describe('Suite de manipulação de Herois', () => {
  it('deve cadastrar um heroi, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    ok(null, expected)
  })
})
