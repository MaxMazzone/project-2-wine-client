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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess
}
