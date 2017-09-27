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

const callGoogle = function (name, region, vintage) {
  return $.ajax({
    url: 'https://www.googleapis.com/customsearch/v1?q=' + name + '&' + region + '&' + vintage + '&cx=008697528825471743326%3Avxgzabv2d64&key=AIzaSyCCJftMVxbjb2FsNsMhMtbvbJSMq8txlXE',
    method: 'GET'
  })
}

module.exports = {
  makeWine,
  getWines,
  editWine,
  deleteWine,
  callGoogle
}
