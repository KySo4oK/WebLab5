const http = require('http')
const port = 3000
const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    Date.prototype.getWeek = function() {
        let firstJanuary = new Date(this.getFullYear(),0,1);
        return Math.ceil((((this - firstJanuary) / 86400000) + firstJanuary.getDay()+1)/7);
    }
    let today = new Date(2019,0,6);
    let weekNumber = today.getWeek();
    alert(weekNumber);
    console.log(`server is listening on ${port}`)
})