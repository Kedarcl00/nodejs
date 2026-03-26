const express = require('express');
const app = express();

app.get('/:number', (req, res) => {

    const num = req.params.number;

    const reverseNum = num.split('').reverse().join('');

    if (num === reverseNum) {
        res.send(num + " is a palindrome number");
    } 
    else {
        res.send(num + " is not a palindrome number");
    }

});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});