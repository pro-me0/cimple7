const print = require('./strT0');

exports.details = (req, dir, str, col) => {
    print.write(str, col);
    try{
        console.table([
            {
                URL: req.url,
                METHOD: req.method,
                "Responded with": dir
            }
        ]);
    }catch(e){
        console.log(`
        !> Untraceable Error ∆ ∆ => ${JSON.stringify(e)}
        `.brightRed);
    }
}