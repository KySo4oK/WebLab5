let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/about.html');
});

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});


