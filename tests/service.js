import axios from 'axios'

export async function obterDados(nome) {
  const URL = `https://swapi.dev/api/people`
  const url = `${URL}/?search=${nome}&format=json`
  const result = await axios.get(url)
  return result.data.results.map(mapearPessoas)
}

function mapearPessoas(item) {
  return {
    nome: item.name,
    peso: item.height
  }
}
