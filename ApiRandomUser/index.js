console.log('hello world')
//CONSUMINDO API RANDOM USER
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
  const userData = user[0]
  const userId = document.getElementById('userName')
  const userImage = document.getElementById('userImage')
  const userAdress = document.getElementById('adress')
  userAdress.textContent = userData.location.street.number
  userId.textContent = userData.name.first
  userImage.src = userData.picture.large
}
showUser()
