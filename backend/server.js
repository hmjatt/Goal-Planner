const express = require('express');
const dotenv = require('dotenv').config();
const port = 5000;

const app = express()

console.log("This is server.js file");
app.listen(port, () => console.log(`Server started on port ${port}`));