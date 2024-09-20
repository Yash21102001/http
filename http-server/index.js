const http = require("http");
const fs = require('fs');
const port = 8087;

const requestHeandle = (req, res) => {
    // res.write("<h1>Y</h1>");
    // res.write("<h1>Y A</h1>");
    // res.write("<h1>Y A S</h1>");
    // res.write("<h1>Y A S H</h1>");
    // res.end()

    let fileName = "";
    switch (req.url) {
        case '/':
            fileName = "index.html";
            break;
        case '/home':
            fileName = "home.html";
            break;
        case '/about':
            fileName = "about.html"; 
            break;
        case '/contect':
            fileName = "contect.html";
        default:
            fileName = "error.html"

    }
    fs.readFile(fileName,(err,result) =>{
        if (!err) {
            res.end(result);
        }
    })
}

const server = http.createServer(requestHeandle);

server.listen(port, (err) => {
    if (err) {
        console.log("Server Not Start On Port..");
        return false;
    }

    console.log("Server Start On Port : http://localhost:" + port);
})
