import { getPeople } from './service.js'
async function main() {
  try {
    const results = await getPeople('a')
    const names = []
    results.results.forEach(item => {
      names.push(item.name)
    })
    console.log(names)
  } catch (error) {
    console.error(error)
  }
}
main()
