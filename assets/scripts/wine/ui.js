const showWines = require('../templates/wine-listing.handlebars')
const api = require('./api')
const getFormFields = require(`../../../lib/get-form-fields`)

const MakeWineSuccess = function (data) {
  // console.log('make wine success')
  // console.log(data)
  $('#make-wine').trigger('reset')
  api.getWines()
    .then(getWinesSuccess)
    .catch(getWinesFailure)
}
const MakeWineFailure = function () {
  $('#content-message').css('display', 'inline-block')
  $('#content-message').show()
  $('#content-message').text('Wine Not Made. All Wines Must Include A Name.')
  $('#content-message').delay(4000).fadeOut('2000')
}
const getWinesSuccess = function (data) {
  // console.log(data)
  // console.log('You got all the wines')
  // console.log(data.wines.length)
  $('.content').empty()
  $('#research-message').empty()
  const showWinesHtml = showWines({ wines: data.wines })
  $('.content').append(showWinesHtml)
  $('.delete-wine').on('click', onDeleteWineClick)
  $('.edit-wine').on('submit', onEditWine)
  $('.edit-wine-show').on('click', onEditButtonClick)
  $('.research-wine').on('click', onResearchClick)
  $('.research-wine-button').on('click', onResearchButtonClick)
  $('.content').css('display', 'inline-block')
  if (data.wines.length === 0) {
    noWinesCreated()
  }
}

const onResearchButtonClick = function (event) {
  const wineId = $(this).parent().parent().data('id')
  event.preventDefault()
  // console.log('you clicked edit')
  // console.log(wineId)
  $('#research-wine-' + wineId).click()
}

const onResearchClick = function (event) {
  const data = getFormFields(this)
  // const wineData = data.wine
  event.preventDefault()
  // console.log(data.wine.name)
  api.callGoogle(data.wine.name, data.wine.region_name, data.wine.vintage)
    .then(callGoogleSuccess)
    .catch(callGoogleFailure)
}

const noWinesCreated = function () {
  $('#content-message').css('display', 'inline-block')
  $('#content-message').show()
  $('#content-message').text('No wines Yet')
  $('#content-message').delay(2000).fadeOut('2000')
}

const onDeleteWineClick = function (data) {
  const wineId = $(this).parent().parent().data('id')
  // console.log('this will delete wine # ' + wineId)
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
  $('#content-message').show()
  $('#content-message').text('Unable to get wines')
  $('#content-message').delay(2000).fadeOut('2000')
}
const editWineSuccess = function (data) {
  // console.log('edit wine success')
  // console.log(data)
  $('#edit-wine').trigger('reset')
  api.getWines()
    .then(getWinesSuccess)
    .catch(getWinesFailure)
}
const editWineFailure = function () {
  // console.log('edit wine failure')
  $('#content-message').show()
  $('#content-message').text('Unable To Edit Wine')
  $('#content-message').delay(2000).fadeOut('2000')
}
const deleteWinesSuccess = function (data) {
  // console.log('delete wine success')
  api.getWines()
    .then(getWinesSuccess)
    .catch(getWinesFailure)
}
const deleteWinesFailure = function () {
  // console.log('delete wine failure')
  $('#content-message').show()
  $('#content-message').text('Unable To Delete Wine')
  $('#content-message').delay(2000).fadeOut('2000')
}
const callGoogleSuccess = function (data) {
  $('#research-message').empty()
  $('#research-message').show()
  let name = data.items[0].pagemap.product[0].name
  let price = data.items[0].pagemap.pricespecification[0].price
  let currency = data.items[0].pagemap.pricespecification[0].pricecurrency
  let format = data.items[0].pagemap.pricespecification[0].description
  let vintage = data.items[0].pagemap.product[0].model
  if (name === undefined) {
    name = ''
  }
  if (price === undefined) {
    price = ''
  }
  if (currency === undefined) {
    currency = ''
  }
  if (format === undefined) {
    format = ''
  }
  if (vintage === undefined) {
    vintage = ''
  }
  $('#research-message').text('This is the closest search result: ' + name + ' ' + vintage + ' $' + price + ' ' + currency + ' in ' + format)

  $('#research-message').delay(15000).fadeOut()
  // console.log('call Google success')
  // console.log(data)
  // console.log(data.items[0].pagemap.pricespecification[0].price)
}
const callGoogleFailure = function () {
  $('#research-message').empty()
  $('#research-message').show()
  $('#research-message').text('Search Could not be completed')
  $('#research-message').delay(4000).fadeOut()
}
module.exports = {
  MakeWineSuccess,
  MakeWineFailure,
  getWinesFailure,
  getWinesSuccess
}
