//const http=require('http');

/*const server = http.createServer((request, response) => {
  console.log(request);
  const user={
    name: 'John',
    hobby: 'drawing'
  }
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(user));
})
*/
/*
const server = http.createServer(() => {
  console.log("I hear you!!!");
})
*/

//server.listen(3001);

const posts = [
  {
    name: 'BabySitter',
    description:"help babysitting",
    location:{number: 1, street: "Culver Drive", city: "Irvine"},
    time: "every wednesday evenings",
    online: true,
    reqHours: 3,
    contentType: "service",
    contactInfo: {phone: 123456, wechat: "hahahaha", email: "123@456"},
    tags: "nice host",
    ratings: 3.5,
    comments: "Good experience",
    publiserId: 2,
    status: 0,   //0: not finished, 1: signed up, 2: finished
  },
  {
    name: 'BabySitter',
    description:"help babysitting",
    location:{number: 1, street: "Culver Drive", city: "Irvine"},
    time: "evenings",
    online: true,
    reqHours: 3,
    contentType: "service",
    contactInfo: {phone: 123456, wechat: "hahahaha", email: "123@456"},
    tags: "nice host",
    ratings: 3.5,
    comments: "Good experience",
    publiserId: 1,
    status: 0,   //0: not finished, 1: signed up, 2: finished
  },
  {
    name: 'BabySitter',
    description:"help babysitting",
    location:{number: 1, street: "Culver Drive", city: "Irvine"},
    time: "weekend",
    online: true,
    reqHours: 3,
    contentType: "service",
    contactInfo: {phone: 123456, wechat: "hahahaha", email: "123@456"},
    tags: "nice host",
    ratings: 3.5,
    comments: "Good experience",
    publiserId: 0,
    status: 2,   //0: not finished, 1: signed up, 2: finished
  },
  {
    name: 'BabySitter',
    description:"help babysitting",
    location:{number: 1, street: "Culver Drive", city: "Irvine"},
    time: "May 1st 2019, 7:00pm",
    online: true,
    reqHours: 3,
    contentType: "service",
    contactInfo: {phone: 123456, wechat: "hahahaha", email: "123@456"},
    tags: "nice host",
    ratings: 3.5,
    comments: "Good experience",
    publiserId: 1,
    status: 1,   //0: not finished, 1: signed up, 2: finished
  }
]

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json([
    {id: 1, username: "somebody"},
    {id: 2, username: "somebody_else"}
  ]);
});

app.get('/post', (req, res) => {
  res.json(posts);
});

app.get('/profile', (req, res) => {
  res.send("profile");
});

//get stuff from the frontend body-parser


app.listen(3000, ()=> {
    console.log('app is running on port 3000');
});
