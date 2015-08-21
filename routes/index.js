/*jslint node: true, indent: 2,nomen:true */
'use strict';

var express = require('express');
var router = express.Router();


/* GET home page. */
/*jslint unparam: true */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

<<<<<<< HEAD
router.get('/second', function (req, res, next) {
  res.render('second_view', { title: 'Express' });
});

router.get('/search', function (req, res, next) {
  res.render('search_view', { title: 'Express' });
});

router.get('/confirm', function (req, res, next) {
  res.render('confirmar_renta', { title: 'Express' });
});

router.get('/columnas', function (req, res, next) {
  res.render('column', { title: 'Express' });
});

router.get('/side', function (req, res, next) {
  res.render('sidebar', { title: 'Express' });
=======
router.get('/search', function (req, res, next) {
  res.render('search', { title: 'Express' });
>>>>>>> feature/repairbrokencode
});
/*jslint unparam: false */

module.exports = router;
