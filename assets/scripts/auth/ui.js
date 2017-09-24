const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed Up!')
}

const signUpFailure = function () {
  console.error('error signing up')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
