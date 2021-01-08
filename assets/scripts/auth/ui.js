const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Sign Up Successful! You may sign in now')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign Up failed. Try again')
  $('form').trigger('reset')
}
const signInSuccess = function (response) {
  // "Store" the user (and the token)
  // Create a new key on the `store` object
  // Give that key a value of `response.user`
  store.user = response.user
  // TODO: "change the view"
  $('.unauth').hide()
  $('.auth').show()
}
const signInFailure = function (data) {
  $('#message').text('Sign in failed. Let\'s try another password?')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Password Change Successful')
  $('#change-password').hide()
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('#message').text('Password Change didn\'t work')
  $('#change-password').hide()
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  $('#message').text('cya later!')
  $('.unauthenticated').show()
  $('h1').show()
  $('.authenticated').hide()
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
