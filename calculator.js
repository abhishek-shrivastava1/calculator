const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.listen(port, () => console.log(`server is started on port ${port}`));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    let payload = req.body;
    console.log(req.body);
    res.send(`This result is ${Number(payload.num1) + Number(payload.num2)}`);
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post('/bmicalculator', (req, res) => {
    let payload = req.body;
    let weight = Number(payload.weight);
    let height = Number(payload.height);
    let BMI = weight / (Math.pow(height, 2));
    res.send(`Your BMI is ${BMI}`);
});
// a4611cd157d104eb7da558986ffe7c3d