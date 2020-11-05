'use strict';

var utils = require('../utils/writer.js');
var Alias = require('../service/AliasService');

module.exports.addAlias = function addAlias (req, res, next) {
  var body = req.swagger.params['body'].value;
  var idPersona = req.swagger.params['idPersona'].value;
  Alias.addAlias(body,idPersona)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAlias = function deleteAlias (req, res, next) {
  var idAlias = req.swagger.params['idAlias'].value;
  Alias.deleteAlias(idAlias)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAliasById = function getAliasById (req, res, next) {
  var idAlias = req.swagger.params['idAlias'].value;
  Alias.getAliasById(idAlias)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAliasByIdPersona = function getAliasByIdPersona (req, res, next) {
  var idPersona = req.swagger.params['idPersona'].value;
  var idCaso = req.swagger.params['idCaso'].value;
  Alias.getAliasByIdPersona(idPersona,idCaso)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAlias = function updateAlias (req, res, next) {
  var body = req.swagger.params['body'].value;
  var idAlias = req.swagger.params['idAlias'].value;
  Alias.updateAlias(body,idAlias)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
