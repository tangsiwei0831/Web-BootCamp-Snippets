import express from 'express';
import https from 'https';
import bodyParser from 'body-parser';
const log = console.log;

const app = express();

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// urlencoded - form data
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    // res.send('Hello World!')
    // can only have send
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res){
    const query = req.body.cityName;
    const apiKey = '3b3f1b1c53dafcb1f00c3cc1d4ee2957';
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
    https.get(url, function (response) {
        // log(response.statusCode)

        response.on('data', function (data) {
            // parse - take hex code to JS object
            // stringify - JS object to string
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            // log(temp)
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write('<h1>The temperature in ' + query + 'is ' + temp + 'degrees Celcius.</h1>');
            res.write("<image src=" + imageURL + ">");
            res.send()
        })
    })
})


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});