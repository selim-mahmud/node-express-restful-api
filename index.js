const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

//App setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routers/authRoutes')(app);
require('./server/routers/questionRoutes')(app);


//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);