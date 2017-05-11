const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mainCtrl = require('./controllers/mainCtrl');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/money', mainCtrl.getBalance);
app.get('/name', mainCtrl.getName);

app.put('/deposit', mainCtrl.deposit);
app.put('/withdraw', mainCtrl.withdraw);


app.listen(3000, console.log('hi'));