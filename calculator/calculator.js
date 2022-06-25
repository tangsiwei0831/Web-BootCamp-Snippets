import express from 'express';
import bodyParser from 'body-parser';
const app = express();


// file path solution
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// urlencoded - form data
app.use(bodyParser.urlencoded({extended: true}));

// __dirname: path to the current folder
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    // console.log(__dirname);
});

app.post('/', function(req, res){
    // res.send('Thanks for posting that!')
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("The result of calculation is " + result);
});

app.get('/bmicalculator', function(req, res){
    res.sendFile(__dirname + '/bmiCalculator.html');
    // console.log(__dirname);
});

app.post('/bmiCalculator', function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
})

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});