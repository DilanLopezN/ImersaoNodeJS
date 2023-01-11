import { deepEqual, ok } from 'node:assert'
import Database from './Database.js'

const DEFAULT_ITEM_CADASTRAR = { nome: 'Flash', poder: 'speed', id: 1 }
const DEFAULT_ITEM_ATUALIZAR = {
  nome: 'Lanterna Verde',
  poder: 'Energia do anel',
  id: 2
}
describe('Suite de manipulação de Herois', () => {
  before(async () => {
    await Database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    await Database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
  })

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

  it('deve remover um heroi por id', async () => {
    const expected = true
    const resultado = await Database.remover(DEFAULT_ITEM_CADASTRAR.id)

    deepEqual(resultado, expected)
  })
  it('deve atualizar heroi por id', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Batman',
      poder: 'Dinheiro'
    }

    await Database.atualizar(expected.id, {
      nome: expected.nome,
      poder: expected.poder
    })

    const [realResult] = await Database.listar(expected.id)
    deepEqual(realResult, expected)
  })
})
