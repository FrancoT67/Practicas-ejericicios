const express = require('express');
const morgan = require('morgan')
const {engine} = require('express-handlebars');
const path = require('path')
// inicializaciones
const app = express();

//config
app.set('port', 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers:require('./lib/handlebars')
}));
app.set('view engine', '.hbs');
// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// variables globales
app.use((req, res, next)=>{

    next();
})
//rutas
app.use(require('./routes/index'))
app.use(require('./routes/autenticacion'))
app.use('/links',require('./routes/links'))


//publicos

app.use(express.static(path.join(__dirname,'public')))

//inializar
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'))
})






































































