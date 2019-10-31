let express = require('express');
let app = express();

app.get('/', function (req, res) {

    res.sendStatus(f());
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
function f() {
        let r =10;
        return Math.PI*r*r;
}
