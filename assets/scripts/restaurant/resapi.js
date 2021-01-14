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
    method: 'GET'
  })
}

const showOne = function (data) {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + data.restaurant._id,
    method: 'GET'
  })
}

const deleteRestaurant = function (data) {
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

const createReview = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'POST',
    data: data
  })
}

const deleteReview = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews/' + data.review.reviewId,
    method: 'DELETE',
    data: data
  })
}

const updateReview = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews/' + data.review.reviewId,
    method: 'PATCH',
    data: data
  })
}

module.exports = {
  createRestaurant,
  indexAll,
  showOne,
  deleteRestaurant,
  updateRestaurant,
  createReview,
  deleteReview,
  updateReview
}
