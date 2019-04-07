const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express();


app.use(express.static(__dirname + '/public'));
    // setting up ejs
//app.use(expressLayouts);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('tictactoe');
});


app.listen(5000, () => console.log(`The server is running`));