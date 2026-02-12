var http = require('http');   // use require instead of import in CommonJS

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    let a = 8;
    let b = 3;
    let sub = a - b;
    
    res.end('The subtraction of '+ a +' and '+ b +' is '+ sub);
    
}).listen(8080);

console.log("Server running at http://localhost:8080/");