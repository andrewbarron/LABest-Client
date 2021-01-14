// const store = require('./../store')

const createSuccess = function (response) {
  $('#current-page').text('Restaurant Created.')
  $('#message').empty()
  $('#create-restaurant').hide()
  const resInfo = response.restaurant
  $('#message').text(`ID: ${resInfo._id} Name: ${resInfo.name} Cuisine Type: ${resInfo.cuisine} Location: ${resInfo.location} Created by(owner): ${resInfo.owner.email}`)
  $('form').trigger('reset')
}

const createFailure = function (response) {
  $('#current-page').text('Unable to create Restaurant')
  $('#message').empty()
  $('#create-restaurant').hide()
  $('form').trigger('reset')
}

const indexSuccess = function (response) {
  const allRestaurants = response.restaurant
  $('#message').empty()
  $('#current-page').text(`Here are all ${allRestaurants.length} of your Restaurants!`)
  const list = document.createElement('ul')
  const fragment = document.createDocumentFragment()
  $(allRestaurants).each(function (index, currentRes) {
    const li = document.createElement('li')
    li.textContent = `Restaurant ID: ${currentRes._id} Name: ${currentRes.name} Cuisine Type: ${currentRes.cuisine} Location: ${currentRes.location}`
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
  $('#message').empty()
  $('#show-restaurant').hide()
  $('form').trigger('reset')
  $('#current-page').text('Order up! Here is that restaurant')
  const resInfo = response.restaurant
  $('#message').text(`ID: ${resInfo._id} Name: ${resInfo.name} Cuisine Type: ${resInfo.cuisine} Location: ${resInfo.location} Created by(owner): ${resInfo.owner.email}`)
}

const showError = function (response) {
  $('#message').empty()
  $('#current-page').text('Unable to find your Restaurant.')
  $('#show-restaurant').hide()
  $('form').trigger('reset')
}

const deleteRestaurantSuccess = function () {
  $('#message').empty()
  $('#current-page').text('Restaurant Deleted.')
  $('#delete-restaurant').hide()
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
  $('#update-restaurant').hide()
  const resInfo = response.restaurant
  $('#message').text(`ID: ${resInfo._id} New Name: ${resInfo.name} New Cuisine Type: ${resInfo.cuisine} New Location: ${resInfo.location} Created by: ${resInfo.owner.email} `)
  $('form').trigger('reset')
}

const createReviewSuccess = function (response) {
  $('#message').empty()
  $('#write-review').hide()
  $('#current-page').text(`Here is the review you created for ${response.restaurant.name}:`)
  const revData = response.restaurant.reviews
  const currentReview = revData[revData.length - 1]
  $('#message').text(`Restaurant ID: ${response.restaurant._id} Review ID: ${currentReview._id} Description: ${currentReview.description} Favorite Dish: ${currentReview.favoriteDish} Price: ${currentReview.price} Value: ${currentReview.value}`)
  $('form').trigger('reset')
}

const deleteReviewSuccess = function () {
  $('#message').empty()
  $('#current-page').text('Review is gone.')
  $('#delete-review').hide()
  $('form').trigger('reset')
}

const updateReviewSuccess = function (response) {
  $('#message').empty()
  $('#current-page').text('Here is that new review.')
  $('#update-review').hide()
  $('form').trigger('reset')
  const revData = response.review
  $('#message').text(`Review ID: ${revData.reviewId} Description: ${revData.description} Favorite Dish: ${revData.favoriteDish} Price: ${revData.price} Value: ${revData.value}`)
}

$(document).ready(function () {
  $('#showpass').click(function () {
    $('#change-password').toggle()
  })
})

$(document).ready(function () {
  $('#createRes').click(function () {
    $('#create-restaurant').toggle()
  })
})

$(document).ready(function () {
  $('#seeARestaurant').click(function () {
    $('#show-restaurant').toggle()
  })
})

$(document).ready(function () {
  $('#deleteARes').click(function () {
    $('#delete-restaurant').toggle()
  })
})

$(document).ready(function () {
  $('#updateARes').click(function () {
    $('#update-restaurant').toggle()
  })
})

$(document).ready(function () {
  $('#writeReview').click(function () {
    $('#write-review').toggle()
  })
})

$(document).ready(function () {
  $('#updateReview').click(function () {
    $('#update-review').toggle()
  })
})

$(document).ready(function () {
  $('#deleteReview').click(function () {
    $('#delete-review').toggle()
  })
})

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
