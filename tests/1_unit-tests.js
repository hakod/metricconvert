/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '4.2kg'
      assert.equal(convertHandler.getNum(input),4.2)
      done();
      //done();
    });
    
    test('Fractional Input', function(done) {
      var input = '4/3kg'
      assert.equal(convertHandler.getNum(input),1.33333)
      done()
      //done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '5.5/3.5kg'
      assert.equal(convertHandler.getNum(input),1.57143)
      done()
      //done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '2/4/2gal'
      assert.equal(convertHandler.getNum(input),'invalid number')
      done()
      //done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'gal'
      assert.equal(convertHandler.getNum(input),1)
      done();
      //done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.include(['gal','l','mi','km','lbs','kg'],convertHandler.getUnit(ele))        
        //assert
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = 'odk'
      assert.equal(convertHandler.getUnit(input),'invalid unit')
      done()
      //done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','kg','lbs','mi','km']
      var expect = ['gallons','liters','kilograms','pounds','miles','kilometers'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i])
      })
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [4, 'l']
      var expected = 1.05669
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done()
      //done();
    });
    
    test('Mi to Km', function(done) {
      var input = [10, 'mi']
      var expected = 16.0934
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1)
      done()
      //done();
    });
    
    test('Km to Mi', function(done) {
      var input = [10, 'km']
      var expected = 6.21371
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1)
      done()
      //done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [10, 'lbs']
      var expected = 4.53592
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1)
      done()
      //done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [10, 'kg']
      var expected = 22.04624
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1)
      done()
      //done();
    });
    
  });

});