import { readFileSync, writeFileSync } from 'fs'

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json'
  }
  async obterDadosArquivo() {
    const arquivo = readFileSync(this.NOME_ARQUIVO)
    return JSON.parse(arquivo.toString())
  }
  async escreverArquivo(dados) {
    writeFileSync(this.NOME_ARQUIVO, JSON.stringify(dados))
    return true
  }

  async cadastrar(heroi) {
    const dados = await this.obterDadosArquivo()
    const id = heroi.id <= 2 ? heroi.id : Date.now()
    const heroisComId = {
      id,
      ...heroi
    }
    const dadosFinal = [...dados, heroisComId]
    const resultado = await this.escreverArquivo(dadosFinal)
    return resultado
  }

  async listar(id) {
    const dados = await this.obterDadosArquivo()
    return dados.filter(item => (id ? item.id == id : true))
  }

  async remover(id) {
    if (!id) {
      return await this.escreverArquivo([])
    }
    const dados = await this.obterDadosArquivo()
    const indice = dados.findIndex(item => item.id === parseInt(id))
    if (indice === -1) {
      throw Error('O usuario informado não existe')
    }
    dados.splice(indice, 1)

    return await this.escreverArquivo(dados)
  }
}

export default new Database()
