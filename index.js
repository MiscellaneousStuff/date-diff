const process = require("process");
const moment = require("moment");

if (process.argv.length == 4) {
    const start = moment(process.argv[2], 'DD/MM/YYYY');
    const end = moment(process.argv[3], 'DD/MM/YYYY');
    const duration = moment.duration(end.diff(start));
    console.log(duration.humanize());
} else {
    console.log('Usage: node index.js DD/MM/YYYY DD/MM/YYYY');
}