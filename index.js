Date.prototype.getWeek = function() {
    let oneJan = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - oneJan) / 86400000) + oneJan.getDay()+1)/7);
}
let today = new Date();
let weekNumber = today.getWeek();
console.log(weekNumber);