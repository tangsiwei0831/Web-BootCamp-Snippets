import express from 'express';

const app = express();

app.get('/', function(req, res){
    // console.log(request);
    res.send('<h1>Hello, World!</h1>');
});

app.get('/contact', function(req, res){
    // console.log(request);
    res.send('Contact me at: siweitang@hotmail.com');
});

app.get('/about', function(req, res){
    // console.log(request);
    res.send('My name is Siwei Tang');
})

app.get('/nodemon', function(req, res){
    // console.log(request);
    res.send('Test nodemon');
})

app.listen(3000, function(){
    console.log('Server started on 3000')
});