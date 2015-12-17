var commandLineArgs = require('command-line-args');

var cli = commandLineArgs([
    { name: 'value', alias: 'v', type: Number },
    { name: 'hours', alias: 'h', type: Number }
]);

var options = cli.parse();

if( typeof options.value !== 'undefined' && typeof options.hours !== 'undefined' ) {
    return console.log('R$' + options.value*options.hours);
}