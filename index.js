let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.sendStatus(f());
});

app.listen(PORT, function () {
    console.log('Example app listening on port 3000!');
});
function f() {
    let r =20;
    return Math.PI*r*r;
}

