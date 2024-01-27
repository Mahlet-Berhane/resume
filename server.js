const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post('/submit-form', (req, res) => {
    const { name, email, phone , comment } = req.body;
    console.log('Username:', name, 'Email:', email, 'Tel:', phone,'Comment:', comment);
    // Handle the form data, save it to a database, etc.
    res.send('Form submitted');
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
  });
  