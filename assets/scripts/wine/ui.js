const showWines = require('../templates/wine-listing.handlebars')

const MakeWineSuccess = function (data) {
  console.log('make wine success')
  console.log(data)
  $('#make-wine').trigger('reset')
}
const MakeWineFailure = function () {
  console.log('make wine failure')
}
const getWinesSuccess = function (data) {
  console.log(data)
  console.log('You got all the wines')
  const showWinesHtml = showWines({ wines: data.wines })
  $('.content').append(showWinesHtml)
  $('.delete-wine').on('click', function () {
    const showId = $(this).parent().parent().data('id')
    console.log('this will delete wine # ' + showId)
  })
}

const getWinesFailure = function () {
  console.error('error getting wines')
}
const editWineSuccess = function (data) {
  console.log('edit wine success')
  console.log(data)
  $('#edit-wine').trigger('reset')
}
const editWineFailure = function () {
  console.log('edit wine failure')
}
module.exports = {
  MakeWineSuccess,
  MakeWineFailure,
  getWinesFailure,
  getWinesSuccess,
  editWineFailure,
  editWineSuccess
}
