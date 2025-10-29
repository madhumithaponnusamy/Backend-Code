var express = require('express');
var app = express();
var PORT = 3001;

// Home page route
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Home Page</h1>
    <p>This is our simple Express.js website.</p>
    <a href="/about">Go to About Us madhu</a> 
  `);
});

// About Us page route
app.get('/about', (req, res) => {
  res.send(`
    <h1>About Us</h1>
    <p>We are a demo company building awesome things with Node.js and Express!</p>
    <a href="/">Go back Home</a>
  `);
});

function afterComplete(error) {
    if (error === undefined) {
        console.log(`Server running at http://localhost:${PORT}`);
    } else {
        console.log(error)
    }
}

// Start the server
app.listen(PORT, afterComplete);
