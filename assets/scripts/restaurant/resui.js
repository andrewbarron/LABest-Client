// const store = require('./../store')

const createSuccess = function (response) {
  $('#current-page').text('Restaurant Created.')
  $('#message').empty()
  const resInfo = response.restaurant
  $('#message').text(`ID: ${resInfo._id} Name: ${resInfo.name} Cuisine Type: ${resInfo.cuisine} Location: ${resInfo.location} Created by(owner): ${resInfo.owner.email}`)
  $('form').trigger('reset')
  // const list = document.createElement('ul')
  // const fragment = document.createDocumentFragment()
  // const li = document.createElement('li')
  // li.textContent = `ID: ${resInfo._id} Name: ${resInfo.name} Cuisine Type: ${resInfo.cuisine} Location: ${resInfo.location} Created by: ${resInfo.owner}`
  // // $(resInfo).each(function (index, currentRes) {
  // //   const li = document.createElement('li')
  // //   li.textContent = `ID: ${currentRes._id} Name: ${currentRes.name} Cuisine Type: ${currentRes.cuisine} Location: ${currentRes.location} Created by: ${currentRes.owner}`
  // //   fragment.appendChild(li)
  // // })
  // list.appendChild(fragment)
  // const app = document.querySelector('#message')
  // app.appendChild(list)
}

const createFailure = function (response) {
  $('#current-page').text('Unable to create Restaurant')
  $('#message').empty()
  $('form').trigger('reset')
}

const indexSuccess = function (response) {
  const allRestaurants = response.restaurant
  $('#current-page').text(`Here are all ${allRestaurants.length} of your Restaurants!`)
  const list = document.createElement('ul')
  const fragment = document.createDocumentFragment()
  $(allRestaurants).each(function (index, currentRes) {
    const li = document.createElement('li')
    li.textContent = `ID: ${currentRes._id} Name: ${currentRes.name} Cuisine Type: ${currentRes.cuisine} Location: ${currentRes.location} Created by: ${currentRes.owner.email}`
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
    li.textContent = `ID: ${currentRes._id} Name: ${currentRes.name} Cuisine Type: ${currentRes.cuisine} Location: ${currentRes.location} Created by: ${currentRes.owner.email}`
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

const deleteRestaurantSuccess = function () {
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
  $('#current-page').text('Restaurant Updated.')
  $('#message').empty()
  const resInfo = response.restaurant
  $('#message').text(`ID: ${resInfo._id} New Name: ${resInfo.name} New Cuisine Type: ${resInfo.cuisine} New Location: ${resInfo.location} Created by: ${resInfo.owner.email}`)
  $('form').trigger('reset')
}

const createReviewSuccess = function (response) {
  $('#message').empty()
  $('#current-page').text(`Here is the review you created for ${response.restaurant.name}:`)
  const revData = response.restaurant.reviews
  const currentReview = revData[revData.length - 1]
  console.log(currentReview)
  $('#message').text(`Review ID: ${currentReview._id} Description: ${currentReview.description} Favorite Dish: ${currentReview.favoriteDish} Price: ${currentReview.price} Value: ${currentReview.value}`)
  $('form').trigger('reset')
}

const deleteReviewSuccess = function () {
  $('#message').empty()
  $('#current-page').text('Review is gone.')
  $('form').trigger('reset')
}

const updateReviewSuccess = function () {
  $('#message').empty()
  $('#current-page').text('Review is updated.')
  $('form').trigger('reset')
}
module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  indexError,
  showSuccess,
  showError,
  deleteRestaurantSuccess,
  updateSuccess,
  createReviewSuccess,
  deleteReviewSuccess,
  updateReviewSuccess,
  error
}
