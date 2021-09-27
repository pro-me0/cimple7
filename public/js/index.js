const
port = 1800,
fs = require('fs'),
http = require('http').createServer((req, res) => {
    let dir = req.url;
    if(dir.indexOf('.html') !== -1 ){
        res.writeHead(200, {"Content-Type" : "text/html"});
        fs.readFile(`.${dir}`, (err, dat) => {
            if (err){
                res.writeHead(404, {"Content-Type" : "text/html"});
    res.write(`<h1>404 
    HTML file not found</h1>`);
    res.end()
            }else{
                res.write(dat);
                res.end();
            }
        })
    }else if(dir.indexOf('.js') !== -1 ){
        res.writeHead(200, {"Content-Type" : "text/javascript"});
        fs.readFile(`.${dir}`, (err, dat) => {
            if (err){
                res.writeHead(404, {"Content-Type" : "text/html"});
    res.write(`<h1>404 
    JAVASCRIPT file not found</h1>`);
    res.end()
            }else{
                res.write(dat);
                res.end();
            }
        })
    }else{
        res.writeHead(404, {"Content-Type" : "text/html"});
        res.write(`<h1>404 
        file not found</h1>`);
        res.end()
    }
    console.log('url ==>' + dir)
}).listen(port);
console.table({
    'server hot @': `http://localhost:${port}`
});
