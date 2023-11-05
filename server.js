const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.get('/lr', (req, res) => {
    res.sendFile(__dirname+'/Lr.html');
});

app.get('/pr', (req, res) => {
    res.sendFile(__dirname+'/Pr.html');
});

app.get('/svr', (req, res) => {
    res.sendFile(__dirname+'/Svr.html');
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
