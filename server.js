const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'https://runloggerdb.herokuapp.com',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(express.json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/*',cors(), (req, res) =>{
    res.sendFile(path.join(__dirname,'build','index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));