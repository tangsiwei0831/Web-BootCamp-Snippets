import express from "express";
import request from "request";
import bodyParser from 'body-parser';
import https from "https";
import client from "@mailchimp/mailchimp_marketing"; // you need to add dependency first. See tips.
 
const app = express();
app.use(express.static("public"));

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// urlencoded - form data
app.use(bodyParser.urlencoded({extended: true}));
 
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});
 
client.setConfig({
  apiKey: '6d18e855036a6621106f37d8538b36d8-us10',
  server: "us10",
});
 
app.post("/", function(req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;
  console.log(firstName, lastName, email);
  const subscribingUser = {
    firstName: firstName,
    lastName: lastName,
    email: email
  }
 
  const run = async () => {
    try {
      const response = await lists.addListMember("89d0f376a7", {
        email_address: subscribingUser.email,
        status: "subscribed",
        merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName
        }
      });
      console.log(response);
      res.sendFile(__dirname + "/success.html");
    } catch (err) {
      console.log(err.status);
      res.sendFile(__dirname + "/failure.html");
    }
  };
 
  run();
});
 
app.post("/failure", function(req, res) {
  res.redirect("/");
});
 
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});

// API Key
// 6d18e855036a6621106f37d8538b36d8-us10

// List Id
// 89d0f376a7