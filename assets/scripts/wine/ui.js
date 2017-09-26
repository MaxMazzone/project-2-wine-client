const showWines = require('../templates/wine-listing.handlebars')
const api = require('./api')
const getFormFields = require(`../../../lib/get-form-fields`)

const MakeWineSuccess = function (data) {
  console.log('make wine success')
  console.log(data)
  $('#make-wine').trigger('reset')
  api.getWines()
    .then(getWinesSuccess)
    .catch(getWinesFailure)
}
const MakeWineFailure = function () {
  console.log('make wine failure')
}
const getWinesSuccess = function (data) {
  console.log(data)
  console.log('You got all the wines')
  $('.content').empty()
  const showWinesHtml = showWines({ wines: data.wines })
  $('.content').append(showWinesHtml)
  $('.delete-wine').on('click', onDeleteWineClick)
  $('.edit-wine').on('submit', onEditWine)
  $('.edit-wine-show').on('click', onEditButtonClick)
}

const onDeleteWineClick = function (data) {
  const wineId = $(this).parent().parent().data('id')
  console.log('this will delete wine # ' + wineId)
  $(this).parent().parent().remove()
  api.deleteWine(data, wineId)
    .then(deleteWinesSuccess)
    .catch(deleteWinesFailure)
}
const onEditWine = function (event) {
  const data = getFormFields(this)
  // const wineData = data.wine
  event.preventDefault()
  const wineId = $(this).parent().data('id')
  // console.log('button working ' + 'data is ' + data)
  // console.log(data)
  api.editWine(data, wineId)
    .then(editWineSuccess)
    .catch(editWineFailure)
}

const onEditButtonClick = function (event) {
  const wineId = $(this).parent().parent().data('id')
  event.preventDefault()
  // console.log('you clicked edit')
  // console.log(wineId)
  $('#edit-wine-' + wineId).toggle()
}

const getWinesFailure = function () {
  console.error('error getting wines')
}
const editWineSuccess = function (data) {
  console.log('edit wine success')
  console.log(data)
  $('#edit-wine').trigger('reset')
  api.getWines()
    .then(getWinesSuccess)
    .catch(getWinesFailure)
}
const editWineFailure = function () {
  console.log('edit wine failure')
}
const deleteWinesSuccess = function (data) {
  console.log('delete wine success')
  api.getWines()
    .then(getWinesSuccess)
    .catch(getWinesFailure)
}
const deleteWinesFailure = function () {
  console.log('delete wine failure')
}

module.exports = {
  MakeWineSuccess,
  MakeWineFailure,
  getWinesFailure,
  getWinesSuccess
}
