'use strict'
const authEvents = require('./auth/events')
const resEvents = require('./restaurant/resevents')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.auth').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-restaurant').on('submit', resEvents.onCreateRestaurant)
  $('#index-restaurants').on('click', resEvents.onIndex)
  $('#show-restaurant').on('submit', resEvents.onShow)
  $('#delete-restaurant').on('submit', resEvents.onDelete)
  $('#update-restaurant').on('submit', resEvents.onUpdate)
})
