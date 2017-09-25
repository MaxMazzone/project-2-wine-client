const config = require('../config')
const store = require('../store')

const makeWine = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/wines',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getWines = function () {
  return $.ajax({
    url: config.apiOrigin + '/wines',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editWine = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + data.wine_id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  makeWine,
  getWines,
  editWine
}
