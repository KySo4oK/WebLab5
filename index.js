let express = require('express');
let app = express();
let fs = require('fs');
let bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({extended: false});
const PORT = process.env.PORT || 3000;

let json = fs.readFileSync('students.json', 'utf8');
let students = JSON.parse(json);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/students', function (req, res) {
    res.render('students', {array: students});
});

app.get('/student/:id', function (req, res) {
    let id = parseInt(req.params.id);
    res.render('student', {student: students.students[id]});
});

app.post('/add', urlencodedParser, function (req, res) {
    let newStudent =
        {
            "first" : req.body.first,
            "last" : req.body.last
    };
    addStudent(newStudent);
    res.render('add');
});

app.get('/add', urlencodedParser, function (req, res) {
    res.render('add');
});

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});


function addStudent(student) {
    students.students.push(student);
    fs.writeFileSync('students.json', JSON.stringify(students));
}


