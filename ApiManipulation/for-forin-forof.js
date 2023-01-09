import { getPeople } from './service.js'

async function main() {
  try {
    const result = await getPeople('a')
    const names = []
    console.time('tempo com for')
    for (let i = 0; i <= result.results.length - 1; i++) {
      const people = result.results[i]
      names.push(people.name)
    }
    console.timeEnd('tempo com for')

    console.log('names', names)
  } catch (error) {
    console.error(`Erro interno`, error)
  }
}
main()
