const connection = require('express');
const bodyparser = require('body-parser');
const app = connection();
const port = 8000;
const cors = require('cors');
const dbconnection = require('./database');
const { request } = require('express');
const { response } = require('express');
app.use(connection.static('public'));
app.use(bodyparser.json());
app.use(
  cors({
    origin: 'http://localhost:4200',
  })
);
app.post('/post', request, (response) => {
  console.log(request);
  var object = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: request.body.password,
    mobile: request.body.mobile,
  };
  dbconnection.insert(object);
  console.log('Data added');
});
