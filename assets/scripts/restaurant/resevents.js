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
    .then()
    .then(ui.showSuccess)
    .catch(ui.error)
}

const onDelete = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.deleteOne(data)
    .then(ui.deleteSuccess)
    .catch(ui.error)
}

const onUpdate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateRestaurant(data)
    .then(ui.updateSuccess)
    .catch(ui.error)
}
module.exports = {
  onCreateRestaurant,
  onIndex,
  onShow,
  onDelete,
  onUpdate
}
