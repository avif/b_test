'use strict';

var express = require('express');
var controller = require('./product.controller');

var router = express.Router();

router.get('/:page', controller.getByPage);
router.get('/single/:id', controller.show);

module.exports = router;
