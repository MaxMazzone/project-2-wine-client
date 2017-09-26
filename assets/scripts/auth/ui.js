const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#sign-up-message').show()
  $('#sign-up-message').text('Successfully Signed Up!')
  $('#sign-up-message').delay(5000).fadeOut('slow')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('#sign-up-message').show()
  $('#sign-up-message').text('Error Signing Up')
  $('#sign-up-message').delay(5000).fadeOut('slow')
  // console.error('error signing up')
}
const signInFailure = function () {
  // console.error('error signing in')
  $('#sign-in-message').show()
  $('#sign-in-message').text('Error Signing In')
  $('#sign-in-message').delay(5000).fadeOut('slow')
}
const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed in, YO!')
  store.user = data.user
  $('#sign-in').trigger('reset')
  $('.auth-event').fadeOut('800')
  $('#top-message').show()
  $('#top-message').text('Welcome')
  $('#top-message').delay(800).fadeOut('slow')
  $('.main-page').delay(1400).fadeIn('slow')
}
const changePasswordSuccess = function () {
  console.log('changed password!')
  $('#change-password').trigger('reset')
  $('#change-password-message').show()
  $('#change-password-message').text('Password Changed')
  $('#change-password-message').delay(4000).fadeOut('slow')
}

const changePasswordFailure = function () {
  console.log('Error changing password')
}

const signOutSuccess = function () {
  console.log('sign out successful')
  store.user = null
  $('.main-page').hide()
  $('#top-message').hide()
  $('.auth-event').delay(1000).fadeIn('800')
  $('.content').empty()
}
const signOutFailure = function () {
  console.log('Error signing out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess
}
