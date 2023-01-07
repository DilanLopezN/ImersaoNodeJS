console.log('hello world')

async function getUser() {
  const response = await fetch(
    'https://randomuser.me/api/?page=3&results=10&seed=abc'
  )
  const data = await response.json()
  return data.results
}
getUser()
async function showUser() {
  const user = await getUser()
  const userData = user[0].name.first
  const userId = document.getElementById('username')
  userId.textContent = userData

  console.log(userName)
}
showUser()
