require('dotenv').config();
const express = require('express')
const hbs =  require('hbs')

const port = process.env.PORT;

const app = express()

//Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Middleware, servir contenido estático, para mostrar el html que tenemos en el públic
app.use( express.static('public'));

// app.get('/', (req, res) => {
//   res.render('home',{
//     nombre:'Nahum',
//     title:'Curso de Node'
//   });
// });

app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Nahum',
    title: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Nahum',
    title: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Nahum',
    title: 'Curso de Node'
  })
});

 
app.get('*', (req, res) => {
  res.send('404 |  Page not found')
});


app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
