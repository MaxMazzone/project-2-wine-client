const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed Up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  console.error('error signing up')
}
const signInFailure = function () {
  console.error('error signing in')
  $('#message').show()
}
const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed in, YO!')
  store.user = data.user
  $('#sign-in').trigger('reset')
}
const changePasswordSuccess = function () {
  console.log('changed password!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
  console.log('Error changing password')
}

const signOutSuccess = function (gameLogic) {
  console.log('sign out successful')
  store.user = null
}
const signOutFailure = function () {
  console.log('Error signing out')
}
const MakeWineSuccess = function (data) {
  console.log('make wine success')
  console.log(data)
  $('#make-wine').trigger('reset')
}
const MakeWineFailure = function () {
  console.log('make wine failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess,
  MakeWineSuccess,
  MakeWineFailure
}
