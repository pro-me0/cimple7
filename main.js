const 
port = process.env.PORT || 3003,
http = require('http'),
fs = require('fs'),
status = require('http-status-codes'),
router = require('./router'),

textType = {"Content-Type": "text/plain"},
htmlType = {"Content-Type": "text/html"},

customReader = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
        if (errors) {
            console.log("Error reading the file...");
        }
        res.end(data);
    });
};

http.createServer(router.handle).listen(port);

console.table({
    'Host': `localhost:${port}`
});