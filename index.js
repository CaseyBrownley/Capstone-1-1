const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) =>{
    res.send('Hello');
});

app.listen(port, () => {
    console.log('Server Listening oon port ${port}');
});

process.env.NODE_ENV = 'production';