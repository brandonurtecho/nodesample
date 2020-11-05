'use strict';


/**
 * Agregar un nuevo alias al sujeto procesal
 *
 * body Alias 
 * idPersona Integer 
 * no response value expected for this operation
 **/
exports.addAlias = function(body,idPersona) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Elimina un alias
 *
 * idAlias Integer 
 * no response value expected for this operation
 **/
exports.deleteAlias = function(idAlias) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Buscar alias por ID
 * Retorna el alias de un sujeto procesal
 *
 * idAlias Integer 
 * returns Alias
 **/
exports.getAliasById = function(idAlias) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "idAliasElemento" : 1,
  "alias" : "alias modificado",
  "idCaso" : 31
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Buscar los alias por ID de persona
 * Retorna todos los alias de una persona
 *
 * idPersona Integer 
 * idCaso Integer 
 * returns List
 **/
exports.getAliasByIdPersona = function(idPersona,idCaso) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "idAliasElemento" : 2,
  "alias" : "alias 1",
  "descripcion" : "descripcion 1",
  "idCaso" : 31
}, {
  "idAliasElemento" : 106,
  "alias" : "alias 2",
  "descripcion" : "descripcion 1",
  "idCaso" : 31
}, {
  "idAliasElemento" : 42,
  "alias" : "alias 3",
  "descripcion" : "descripcion 1",
  "idCaso" : 31
}, {
  "idAliasElemento" : 107,
  "alias" : "alias dadsaasd",
  "descripcion" : "descripcion 1",
  "idCaso" : 31
}, {
  "idAliasElemento" : 1,
  "alias" : "alias modificado",
  "idCaso" : 31
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualiza un alias existente
 * 
 *
 * body Alias 
 * idAlias Integer 
 * returns Object
 **/
exports.updateAlias = function(body,idAlias) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "El alias fue modificado correctamente",
  "code" : 200,
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

