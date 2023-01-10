import { obterDados } from './service.js'
import assert from 'node:assert'
import nock from 'nock'

try {
  describe('Star Wars', function () {
    this.beforeAll(() => {
      const response = {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: 'R2-D2',
            height: '96',
            mass: '32',
            hair_color: 'n/a',
            skin_color: 'white, blue',
            eye_color: 'red',
            birth_year: '33BBY',
            gender: 'n/a',
            homeworld: 'https://swapi.dev/api/planets/8/',
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:11:50.376000Z',
            edited: '2014-12-20T21:17:50.311000Z',
            url: 'https://swapi.dev/api/people/3/'
          }
        ]
      }

      nock('https://swapi.dev/api/people')
        .get('/?search=r2-d2&format=json')
        .reply(200, response)
    })
    it('deve buscar r2d2 com formato correto', async () => {
      const expected = [{ nome: 'R2-D2', peso: '96' }]
      const nomeBase = `r2-d2`

      const resultado = await obterDados(nomeBase)
      console.log(resultado)

      assert.deepEqual(resultado, expected)
    })
  }).timeout(10000)
} catch (error) {
  console.log(error)
}
