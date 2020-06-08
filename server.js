const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

const users = require('./routes/usersRoutes');
const bulletins = require('./routes/bulletinsRoutes')
const links = require('./routes/linksRoutes')
const ministries = require('./routes/ministriesRoutes')
const photos = require('./routes/videosRoutes')
const videos = require('./routes/videosRoutes')

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/st-germaine-church', users);
app.use('/st-germaine-church', bulletins);
app.use('/st-germaine-church', links);
app.use('/st-germaine-church', ministries);
app.use('/st-germaine-church', photos);
app.use('/st-germaine-church', videos);

module.exports = { app }
