const ht = require("http");
const url = require("url");

function pal(x) {
    let rev = 0;
    let y = x;

    while (x > 0) {
        let temp = x % 10;
        rev = rev * 10 + temp;
        x = Math.floor(x / 10);
    }

    return rev === y;   // check palindrome
}

ht.createServer((req, res) => {

    const q = url.parse(req.url, true).query;
    const num = parseInt(q.num);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (!isNaN(num)) {
        if (pal(num)) {
            res.end(num + " is palindrome");
        } else {
            res.end(num + " is not palindrome");
        }
    } else {
        res.end("Please provide a number in URL like ?num=121");
    }

}).listen(3000);

console.log("Server running at http://localhost:3000/");