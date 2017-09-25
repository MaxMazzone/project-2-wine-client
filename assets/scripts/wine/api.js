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

const editWine = function (data, wineId) {
  return $.ajax({
    url: config.apiOrigin + '/wines/' + wineId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteWine = function (data, wineId) {
  return $.ajax({
    url: config.apiOrigin + '/wines/' + wineId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  makeWine,
  getWines,
  editWine,
  deleteWine
}
