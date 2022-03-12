const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path')
const method0verride =  require('method-override');
const session = require('express-session')
const cookieParser = require('cookie-parser')


//---------View engine setup------------------

app.set('views', path.join(__dirname, 'views')); 

app.set('view engine','ejs'); 

/* Middlewares */

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(method0verride('_method'));
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}))
app.use(cookieParser())

/* Router */
let home = require('./routes/homeRouter')
let admin = require('./routes/adminRouter')

app.use('/', home);
app.use('/admin', admin);



/* Controller */


app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}
http://localhost:${PORT}
`));


/* ----------- ERROR 404 ---------------*/
 app.use((req, res, next) => {
    res.status(404).render('404-page', {
        session: req.session  
    }) 
    })
    





