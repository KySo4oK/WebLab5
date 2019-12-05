let express = require('express');
let app = express();
let fs = require('fs');

const PORT = process.env.PORT || 3000;
let json = fs.readFileSync('students.json', 'utf8');
let students = JSON.parse(json);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/about.html');
});

app.get('/students', function (req, res) {
        res.render('students', {array : students});
});

app.get('/student/:id', function (req, res) {
    let id = parseInt(req.params.id);
    console.log(students.students[id]);
    res.render('student', {student : students[id]});
});

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});

// function addStudent(student) {
//     students.push(student);
//     fs.writeFileSync('students.json', students.stringify);
// }


