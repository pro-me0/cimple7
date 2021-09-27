require('colors');

exports.write = (str, col) => {
    console.log(` 
>${str[col]}`.white)
}