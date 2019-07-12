import {Calculate} from '../src/services';
import {should} from 'chai';
should();

describe("Unit Test Suite", function(){
    let calc= new Calculate();

    it("adding two numbers", function(){
        let result = calc.add(2,3);
        result.should.equal(5)
    })
    it("adding two negitive numbers should work", function () {
        var result = calc.add(-3, -4);
        result.should.equal(-7, `expected -7 but returned  ${result}`);
    });

});