import * as app from '../../src/controller';
import {expect,should} from 'chai';
import { url } from 'inspector';
const request = require('request');
should();

describe("Integration test suite", function(){
    describe("get tests", function(){
        it("should get hello world message", ()=>{
           request('http://localhost:7000/greeting',function(error:any,response:any,body:any){
               expect(body).to.equal("Hello World", `expected but the body contain ${body}`);
           })
        });
        });
    describe("post tests", function(){
        it("should return 6 when multiply 3 and 2", function(){
           let jsonBody={"val1":1,"val2":3};
           request.post(
               {
               url:'http://localhost:7000/multi',
               body:JSON.stringify({"val1":2,"val2":3}),
               headers: {'content-type': 'application/json'}
               },function(error:any, response:any,body:any){
                   let resu= JSON.parse(body);
                   console.log(resu.result);
                expect(resu.result).to.equal(6, `expected 6 but the body contain ${body}`);
               });
        });
    });
});