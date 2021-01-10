// const store = require('./../store')

const createSuccess = function (response) {
  console.log(response)
  $('#message').empty()
  const resInfo = response.restaurant
  $('#current-page').text('Here are all Restaurant Created! Take a look')
  const list = document.createElement('ul')
  const fragment = document.createDocumentFragment()
  $(resInfo).each(function (index, currentRes) {
    const li = document.createElement('li')
    li.textContent = `ID: ${currentRes._id} Name: ${currentRes.name} Cuisine Type: ${currentRes.cuisine} Location: ${currentRes.location} Price Range: ${currentRes.price} Owned By: ${currentRes.owner}`
    fragment.appendChild(li)
  })
  list.appendChild(fragment)
  const app = document.querySelector('#message')
  app.appendChild(list)
  $('form').trigger('reset')
}

const createFailure = function (response) {
  $('#current-page').text('Unable to create Restaurant')
  $('#message').empty()
  $('form').trigger('reset')
}

const indexSuccess = function (response) {
  console.log(response)
  $('#message').empty()
  const allRestaurants = response.restaurant
  $('#current-page').text(`Here are all ${allRestaurants.length} of your Restaurants!`)
  const list = document.createElement('ul')
  const fragment = document.createDocumentFragment()
  $(allRestaurants).each(function (index, currentRes) {
    const li = document.createElement('li')
    li.textContent = `ID: ${currentRes._id} Name: ${currentRes.name} Cuisine Type: ${currentRes.cuisine} Location: ${currentRes.location} Price Range: ${currentRes.price} Owned By: ${currentRes.owner}`
    fragment.appendChild(li)
  })
  list.appendChild(fragment)
  const app = document.querySelector('#message')
  app.appendChild(list)
}

const indexError = function (response) {
  $('#message').empty()
  $('#current-page').text('Unable to find Restaurants.')
}

const showSuccess = function (response) {
  console.log(response)
  $('#message').empty()
  const resInfo = response.restaurant
  $('#current-page').text('Order up! Here is that restaurant')
  const list = document.createElement('ul')
  const fragment = document.createDocumentFragment()
  $(resInfo).each(function (index, currentRes) {
    const li = document.createElement('li')
    li.textContent = `ID: ${currentRes._id} Name: ${currentRes.name} Cuisine Type: ${currentRes.cuisine} Location: ${currentRes.location} Price Range: ${currentRes.price} Owned By: ${currentRes.owner}`
    fragment.appendChild(li)
  })
  list.appendChild(fragment)
  const app = document.querySelector('#message')
  app.appendChild(list)
  $('form').trigger('reset')
}

const showError = function (response) {
  $('#message').empty()
  $('#current-page').text('Unable to find your Restaurant.')
  $('form').trigger('reset')
}

const deleteSuccess = function () {
  $('#message').empty()
  $('#current-page').text('We deleted the Restaurant :(')
  $('form').trigger('reset')
}

const error = function (errorMessage) {
  $('#message').empty()
  $('#current-page').text('Hmmmmmmmm, that didn\'t seem to work')
  $('form').trigger('reset')
}

const updateSuccess = function (response) {
  console.log(response)
  $('#message').empty()
  const resInfo = response.restaurant
  $('#current-page').text('Nice! Here\'s that New Restaurant info')
  const list = document.createElement('ul')
  const fragment = document.createDocumentFragment()
  $(resInfo).each(function (index, currentRes) {
    const li = document.createElement('li')
    li.textContent = `ID: ${currentRes._id} Name: ${currentRes.name} Cuisine Type: ${currentRes.cuisine} Location: ${currentRes.location} Price Range: ${currentRes.price} Owned By: ${currentRes.owner}`
    fragment.appendChild(li)
  })
  list.appendChild(fragment)
  const app = document.querySelector('#message')
  app.appendChild(list)
  $('form').trigger('reset')
}

module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  indexError,
  showSuccess,
  showError,
  deleteSuccess,
  updateSuccess,
  error
}
