const fs = require('fs');
const _ = require('lodash');

fs.readFile('data.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);

    const numWords = _.words(data).length;
    console.log("the number of words arr",+ numWords);

    const arr = data.split(' ');
    const rev = _.reverse(arr);
    const reversedContent = rev.join(' ');
    console.log('Reversed File Content:');
    console.log(reversedContent);

    const uniqWords = _.uniq(arr).join();
    console.log("the uniq words are:",+uniqWords);

    fs.writeFile("did.txt",data + '\n' + numWords + '\n'+ reversedContent + '\n' + uniqWords
    ,(err) => {
        if (err) throw err;
    })


});
