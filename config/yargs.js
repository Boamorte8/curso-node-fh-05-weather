const argv = require('yargs')
    .options({
        address: {
            alias: 'a',
            desc: 'The address of the city where consult the weather',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}