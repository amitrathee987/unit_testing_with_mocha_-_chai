const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
//const app = require('../app');


describe('App', function(){
    it('sayHello should return hello', function(){
        let result = sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type sting', function () {
        let result = sayHello();
        assert.typeOf(result, 'string');    
    });

    it('addNumber should be above 7', function () {
        let result = addNumbers(5,5);
        assert.isAbove(result, 7)
    });

    it('sayHello should return type sting', function () {
        let result = addNumbers(5,5);
        assert.typeOf(result, 'number');    
    });
});