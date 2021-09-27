let count = 1;
const status = require("http-status-codes"),
HCType = {"Content-Type": "text/html"},

fs = require('fs'),

write = require('./mymods/strT0'),
tabulate = require('./mymods/Serrd0'),

routes = {
    "GET": {
        "/info": (req, res) => {
            res.writeHead(status.OK, {"Content-Type": "text/plain"});
            res.end("Welcome to the Info Page!")
        },
        '/': (req, res) => {
            res.writeHead(status.OK, {"Content-Type": "text/html"});
            reader(`views/home.html`, req, res);
            process.title = `${count++} turns`;
        },
        '.html': (req, res) => {
            res.writeHead(status.OK, {"Content-Type": "text/html"});
            reader(`views${req.url}`, req, res);
            process.title = `${count++} turns`;
        },
        '.js': (req, res) => {
            res.writeHead(status.OK, {"Content-Type": "text/javascript"});
            reader(`public/js${req.url}`, req, res)
        },
        '.css': (req, res) => {
            res.writeHead(status.OK, {"Content-Type": "text/css"});
            reader(`public/css${req.url}`, req, res)
        },
        '.png': (req, res) => {
            res.writeHead(status.OK, {"Content-Type": "image/png"});
            reader(`public/img${req.url}`, req, res)
        },
        '.jpg': (req, res) => {
            res.writeHead(status.OK, {"Content-Type": "image/jpg"});
            reader(`public/img${req.url}`, req, res)
        },
        '.mp3': (req, res) => {
            res.writeHead(status.OK, {"Content-Type": "music"});
            reader(`public/mp3${req.url}`, req, res);
        }
    },
    'POST': {}
};
exports.handle = (req, res) => {
    // try{
        let url = req.url.slice(req.url.indexOf('.'))
        if(routes[req.method][url]){
            routes[req.method][url](req, res);
            console.log(url)
            // write.write(0, 'Incoming!', 'cyan');
            
       }else{
            res.writeHead(status.NOT_FOUND, HCType);
            res.end("<h1>No such file exists</h1>");
            write.write(0, '\nNo such file exists ☻!', 'brightRed');
        }
    // }catch(ex){
    //     console.log("error" + ex);
    // }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};
exports.post = (url, action) => {
    routes["POST"][url] = action;
}

let printer = (req, word) => {
    tabulate.details(req, word, '\nGreen Light ☺☺', 'white')
}

let reader = (path, req, res) => {
    fs.readFile(path, (err, data) => {
        if (err){
            // res.writeHead(status.NOT_FOUND,)
            fs.readFile('views/err.html', (err,data) => {
                res.end(data)
            })
            write.write(0, `\nNo such '${path}' exists ☻!`, 'red');
        }else{
            res.end(data);
            printer(req, path)
        }
    })
}