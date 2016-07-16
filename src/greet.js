var moment = require('moment'); // Add momentjs

function greet(who) {
    console.log('Hello ' + who + ', it\'s ' + moment().format('h:mm:ss a') + '!');
};

module.exports = greet;
