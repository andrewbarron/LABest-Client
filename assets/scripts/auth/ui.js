const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').empty()
  $('#current-page').text('Sign Up Successful! You may sign in now')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').empty()
  $('#current-page').text('Sign Up failed. Try again')
  $('form').trigger('reset')
}

const signInSuccess = function (response) {
  // "Store" the user (and the token)
  // Create a new key on the `store` object
  // Give that key a value of `response.user`
  store.user = response.user
  $('.unauth').hide()
  $('.auth').show()
  $('#current-page').text(`Sign in Successful. Welcome ${response.user.email}`)
  $('#message').empty()
}
const signInFailure = function (data) {
  $('#message').empty()
  $('#current-page').text('Sign in failed. Let\'s try another password?')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#message').empty()
  $('#current-page').text('Password Change Successful')
  $('#change-password').hide()
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('#message').empty()
  $('#current-page').text('Password Change didn\'t work')
  $('#change-password').hide()
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  $('#message').empty()
  $('.unauth').show()
  $('.auth').hide()
  $('#current-page').text('cya later!')
  store.user = null
  $('form').trigger('reset')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess
}
