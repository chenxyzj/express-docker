const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req,res) => {
    res.send('<h2> Hello everyone!!!<h2>');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})