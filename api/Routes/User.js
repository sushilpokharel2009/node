const user = require('./../Controllers/User');

const Router = require('express').Router();


Router.post('/new', user.create);
Router.get('/getAll', user.get);


module.exports = Router;