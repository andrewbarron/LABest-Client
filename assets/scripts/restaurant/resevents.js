'use strict'
const api = require('./resapi')
const ui = require('./resui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateRestaurant = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createRestaurant(data)
    .then(ui.createSuccess)
    .catch(ui.error)
}

const onIndex = function (event) {
  api.indexAll()
    .then(ui.indexSuccess)
    .catch(ui.error)
}

const onShow = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.showOne(data)
    .then(ui.showSuccess)
    .catch(ui.error)
}

const onDeleteRestaurant = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.deleteRestaurant(data)
    .then(ui.deleteRestaurantSuccess)
    .catch(ui.error)
}

const onUpdateRestaurant = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateRestaurant(data)
    .then(ui.updateSuccess)
    .catch(ui.error)
}
const onCreateReview = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createReview(data)
    .then(ui.createReviewSuccess)
    .catch(ui.error)
}

const onDeleteReview = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.deleteReview(data)
    .then(ui.deleteReviewSuccess)
    .catch(ui.error)
}

const onUpdateReview = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.updateReview(data)
    .then(ui.updateReviewSuccess)
    .catch(ui.error)
}

module.exports = {
  onCreateRestaurant,
  onIndex,
  onShow,
  onDeleteRestaurant,
  onUpdateRestaurant,
  onCreateReview,
  onDeleteReview,
  onUpdateReview
}
