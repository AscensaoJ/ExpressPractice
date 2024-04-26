const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const port = process.env.PORT;
const uts = Date.now();
const time = new Date(uts);

app.use(bodyParser.json());

app.get('/api', async (req, res) => {
    res.json('Hello');
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port} @ ${time}`);
});