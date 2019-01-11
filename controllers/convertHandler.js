/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let res;    
    let invalidNumber = false;
    let firstCharIndex = input.indexOf(input.match('[a-zA-Z]'));
    let val = input.substring(0, firstCharIndex);

    if (val === '') val = 1;
    else if (val.indexOf('/') > 0) {
      let index = val.indexOf('/');
      let num = val.slice(0, index);

      if (isValidNumber(num)) num = Number(num);        
      else invalidNumber = true;
      
      let denom = val.slice(index + 1);
      if (!invalidNumber && isValidNumber(denom)) denom = Number(denom);
    
      if (!invalidNumber) val = num / denom;
    } 
    else {
      if (isValidNumber(val)) val = Number(val);
      else invalidNumber = true;
    }
    
    if (invalidNumber) res = 'invalid number';
    else res = val;

    return res;
  };
  
  this.getUnit = function(input) {
    let Units = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
    let firstCharIndex = input.indexOf(input.match('[a-zA-Z]'));
    let unit = input.substring(firstCharIndex);
    if (Units.indexOf(unit) < 0) return 'invalid unit';
    else return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    let unitConverter = {
      gal: 'L',
      L: 'gal',
      lbs: 'kg',
      kg: 'lbs',
      mi: 'km',
      km: 'mi'
    }
    
    return unitConverter[initUnit];
  };

  this.spellOutUnit = function(unit) {
    let spell = {
      gal: 'gallons',
      L: 'litres',
      lbs: 'lbs',
      kg: 'kilograms',
      mi: 'miles',
      km: 'kilometers'
    }
    
    return spell[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    if (initUnit === 'gal') return initNum * galToL;
    if (initUnit === 'L') return initNum * (1 / galToL);
    
    if (initUnit === 'mi') return initNum * miToKm;
    if (initUnit === 'km') return initNum * (1 / miToKm);
    
    if (initUnit === 'lbs') return initNum * lbsToKg;
    if (initUnit === 'kg') return initNum * (1 / lbsToKg);    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

function isValidNumber(val) {  
  if (typeof val === 'number') return true;
  else if (val[val.length - 1] === '.') return false;
  else {
    let num = Number(val);
    if (isNaN(num)) return false;
    else return true;
  }
}


module.exports = ConvertHandler;
