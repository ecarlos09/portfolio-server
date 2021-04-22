const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const projectRoutes = require('./controllers/projects')
app.use('/projects', projectRoutes)

// Root route
app.get('/', (req, res) => res.send('Hello, welcome to my portfolio server!'))

module.exports = app;