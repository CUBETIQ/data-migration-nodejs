const file = require('fs')

file.readFile('./data/people.csv', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)

    const rows = data.split(/\r?\n/);
    const header = rows[0].split(',').map(str => str.trim())
    console.log(header)

});

