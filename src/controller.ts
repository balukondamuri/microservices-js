import bodyParser from "body-parser";
import express from "express";
const app = express();
const port = 7000;
app.use(bodyParser.json());

app.get("/greeting", function(req: any, res: any) {
        res.send("Hello World");
       });

app.post("/multi", function(req: any, res: any) {
    // tslint:disable-next-line:no-console
        console.log(req.body);
        const value = req.body.val1 * req.body.val2;
        res.send({stauts: value});
    });

app.listen(port, function() {
    // tslint:disable-next-line:no-console
    console.log(`Application Started in ${port}`);
});
