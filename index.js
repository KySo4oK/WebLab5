let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send(weekNumber);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
Date.prototype.getWeek = function() {
    let firstJanuary = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - firstJanuary) / 86400000) + firstJanuary.getDay()+1)/7);
}
let today = new Date(2019,0,6);
let weekNumber = today.getWeek();
