import { deepEqual, ok } from 'node:assert'
import Database from './Database.js'

const DEFAULT_ITEM_CADASTRAR = { nome: 'Flash', poder: 'speed', id: 1 }
describe('Suite de manipulação de Herois', () => {
  it('deve pesquisar heroi usando arquivo', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const resultado = await Database.listar(expected.id)
    ok(resultado, expected)
  })

  /*
  it('deve cadastrar um heroi, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    ok(null, expected)
  })
  */
})
