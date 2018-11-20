/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var rep = input.replace(/[a-zA-Z]+/,'')
    var num = rep.match(/^(\d*\.*\d*)(\/\d*\.*\d*){0,1}$/);
    if (num===null){
      return 'invalid number'
    }
    if (num[0].includes('/')){
      num[0] = eval(num[0]).toFixed(5)
    }
    
    return num[0]==null?'invalid number':Number(num[0])!==0?Number(num[0]):1;
  };
  
  this.getUnit = function(input) {
    var rep = input.replace(/^(\d*\.*\d*)(\/\d*\.*\d*){0,}/,'')
    var unit = rep.match(/^((gal)|(l)|(lbs)|(kg)|(mi)|(km))$/i);
 
    return unit!==null?unit[0].toLowerCase():'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    var returnUnit = initUnit;
    var unitArr = ['none','gal','l','kg','lbs','mi','km']
    if (unitArr.indexOf(returnUnit)%2==0){
     returnUnit = unitArr[unitArr.indexOf(returnUnit)-1] 
    } else {
     returnUnit = unitArr[unitArr.indexOf(returnUnit)+1]
    }
    
    return returnUnit!=='none'?returnUnit:'invalid unit';
  };

  this.convert = function(initNum, initUnit) {
    var unitArr = ['none','gal','l','lbs','kg','mi','km']
    var conversion = [0,3.78541,3.78541,0.453592,0.453592,1.60934,1.60934]
    var convert = unitArr.indexOf(initUnit)
    var result = initNum;
    if (convert%2===0){
     result = result/conversion[convert] 
    } else {
     result = result*conversion[convert]
    }
  
    return isNaN(result)?'invalid number':Number(result.toFixed(5))
  };
  
  this.spellOutUnit = function(unit) {
    var unitArr = ['none','gal','l','kg','lbs','mi','km']
    var unitStr = ['none','gallons','liters','kilograms','pounds','miles','kilometers'];
    var str = unitStr[unitArr.indexOf(unit)]
    
    return str;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var unitArr = ['none','gal','l','kg','lbs','mi','km']
    var unitStr = ['none','gallons','liters','kilograms','pounds','miles','kilometers'];
    var str = [unitStr[unitArr.indexOf(initUnit)],unitStr[unitArr.indexOf(returnUnit)]]
    var result = initNum+' '+str[0]+' converts to '+returnNum+' '+str[1]
    if (initNum=='invalid number' && initUnit=='invalid unit'){
      return 'invalid number and unit'
    }
    if (initNum=='invalid number'){
      return 'invalid number'
    }
    if (initUnit=='invalid unit') {
      return 'invalid unit' 
    }
    
    return result;
  };
  
}

module.exports = ConvertHandler;
