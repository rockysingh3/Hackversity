const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// middleware
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));






app.get('/', (req, res) => {
  res.render('home');
});



app.listen(3000, () => {
  console.log('The app is running');
});
