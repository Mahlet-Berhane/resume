const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Serve your static files (HTML, CSS, JS, etc.)
app.use(express.static('public')); // Assuming your static files are in a directory named 'public'

// Example route for your homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Adjust the path according to your file structure
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post('/submit-form', (req, res) => {
    const { username, email, phoneNumber, suggestion } = req.body;
    console.log('Username:', username, 'Email:', email, 'PhoneNumer:',phoneNumber,'Suggestion', suggestion);
    // Here you can handle the form data, e.g., save it to a database, etc.
    res.send('Form submitted');
  });
  