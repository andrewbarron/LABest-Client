'use strict'
const config = require('./../config')
const store = require('./../store')

const createRestaurant = function (data) {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const indexAll = function () {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const showOne = function (data) {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + data.restaurant._id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deleteOne = function (data) {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + data.restaurant._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateRestaurant = function (data) {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + data.restaurant._id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createRestaurant,
  indexAll,
  showOne,
  deleteOne,
  updateRestaurant
}
