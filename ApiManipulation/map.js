import { getPeople } from './service.js'
async function main() {
  try {
    const { results } = await getPeople('a')
    const weigth = results.map(item => parseInt(item.height))
    console.log(weigth)
    const total = weigth.reduce((befor, after) => {
      return befor + after
    })
    console.log(total)

    /*
    const { results } = await getPeople('a')
    const larsFamily = results.filter(item => {
      const result = item.name.toLowerCase().indexOf('lars') !== -1
      return result
    })
    const names = larsFamily.map(person => person.name)
    console.log(names)
    */
  } catch (error) {
    console.error(error)
  }
}
main()
