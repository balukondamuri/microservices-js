import bodyParser from "body-parser";
import express from "express";
import {Calculate} from '../src/services'
const app = express();
const port = 7000;
app.use(bodyParser.json());
let calc= new Calculate();

app.get("/greeting", function(req: any, res: any) {
        res.send("Hello World");
       });

app.post("/multi", function(req: any, res: any) {
    // tslint:disable-next-line:no-console
        console.log(req.body);
        const value =   calc.multyply(req.body.val1,req.body.val2);
        res.send({result: value});
    });

app.listen(port, function() {
    // tslint:disable-next-line:no-console
    console.log(`Application Started in ${port}`);
});
