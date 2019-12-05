let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/about.html');
});

app.get('/students', function (req, res) {
    let students = [{name:'name1'},{name:'name2'},{name:'name3'}];
    res.render('students', {array : students});
})

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});


