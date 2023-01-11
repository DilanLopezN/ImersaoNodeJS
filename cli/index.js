import { createCommand } from 'commander'
import Heroi from './heroi.js'
import Database from './Database.js'
async function main() {
  /**
   * node cli.js --help
   */
  createCommand
    .version('v1')
    .option('-n, --nome [value]', 'adicionar nome')
    .option('-p, --poder [value]', 'adicionar poder')
    //CRUD
    .option('-c, --cadastrar', 'cadastrar Heroi')
    .option('-r, --listar [value]', 'listar herois pelo id')
    .option('-u, --atualizar [value]', 'atualizar heroi pelo id')
    .option('-d, --remover [value]', 'remover heroi pelo id')
    .parse(process.argv)

  const heroi = new Heroi(createCommand)
  try {
    /**
     * node cli.js --cadastrar params...
     * node cli.js -c -n Hulk -p Forca
     */
    if (ccreateCommand.cadastrar) {
      await Database.cadastrar(heroi)
      console.log('item cadastrado com sucesso!')
      return
    }

    /**
     * node cli.js --listar
     * node cli.js -r
     * node cli.js -r 1
     */
    if (createCommand.listar) {
      const id = commander.listar
      const result = await Database.listar(id)
      console.log(result)
      return
    }

    /**
     * node cli.js --atualizar
     * node cli.js -u 1 -n papa
     * node cli.js -u 1 -n thor -p trovao
     */
    if (createCommand.atualizar) {
      const id = createCommand.atualizar
      console.log('id', id)
      await Database.atualizar(id, heroi)
      console.log('item atualizado com sucesso!')
      return
    }
    /**
     * node cli.js --remover
     * node cli.js -d 1
     */
    if (createCommand.remover) {
      const id = createCommand.remover
      await Database.remover(id)
      console.log('item removido com sucesso!')
      return
    }
  } catch (error) {
    console.error('DEU RUIM', error)
    return
  }
}
main()
