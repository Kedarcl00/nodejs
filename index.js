const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();
const port = 3000;

app.get("/users", (req, res) => {
    return res.json(users);
});

app.get("/api/users", (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    return res.send(html);
});

app.listen(port, () => {
    console.log("Server running at http://localhost:3000");
});