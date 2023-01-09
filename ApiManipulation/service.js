import axios from 'axios'
const URL = `https://swapi.dev/api/people`
export async function getPeople(name) {
  const url = `${URL}/?search=${name}&format=json`
  const response = await axios.get(url)
  return response.data
}
/*getPeople('r2')
  .then(result => {
    //console.log(result)
  })
  .catch(error => console.error(error))
*/
