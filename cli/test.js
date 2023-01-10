import { deepEqual, ok } from 'node:assert'
import Database from './Database.js'

const DEFAULT_ITEM_CADASTRAR = { nome: 'Flash', poder: 'speed', id: 1 }
describe('Suite de manipulação de Herois', () => {
  it('deve pesquisar heroi usando arquivo', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const [resultado] = await Database.listar(expected.id)
    deepEqual(resultado, expected)
  })

  it('deve cadastrar um heroi, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const resultado = await Database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    const [atual] = await Database.listar(DEFAULT_ITEM_CADASTRAR.id)
    deepEqual(atual, expected)
  })
})
