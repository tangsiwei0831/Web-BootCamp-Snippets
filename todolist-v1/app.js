const express = require("express");
const bodyParser = require("body-parser");

// file path solution
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const date = require(__dirname + '/date.js');
const app = express();

// although array is const, you can push, but no new assign
const items = ['Buy Food'];
const workItems = []

// urlencoded - form data
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    let day = date.getDate();
    res.render('list', {listTitle: day, newListItems: items});
})

app.get('/work', function(req, res){
    res.render('list', {listTitle: 'Work List', newListItems:workItems});
})

app.post('/', function(req, res){
    let item = req.body.newItem;
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect('/work');
    }
    items.push(item);
    res.redirect('/');
})

app.post('/work', function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect('/');
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(){
    console.log("Server started successfully.");
});