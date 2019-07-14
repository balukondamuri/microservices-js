import * as app from '../../src/controller';
import {expect,should} from 'chai';
const request = require('request');
should();

describe("Integration test suite", function(){
    describe("get tests", function(){
        it("should get hello world message", ()=>{
           request('http://localhost:7000/greeting',function(error:any,response:any,body:any){
               expect(body).to.equals("Hello World", `expected the body should contain ${body}`);
               
           })
        });
        });
    
});