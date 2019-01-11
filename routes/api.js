/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      // console.log(req);
      var input = req.query.input;
      console.log(input);
      if (!input || input === '') return res.json('invalid number and unit');

      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      
      if (initUnit === 'invalid unit' && 
      initNum === 'invalid number') return res.json('invalid number and unit');              
      else if (initUnit === 'invalid unit') return res.json(initUnit);
      else if (initNum === 'invalid number') return res.json(initNum);
      
      else {
        var returnNum = convertHandler.convert(initNum, initUnit);
        var returnUnit = convertHandler.getReturnUnit(initUnit);
        var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      }

      let result = {
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        toString
      };
      console.log(result);
      res.json(result);
    });
    
};
