const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path')

//---------View engine setup------------------

app.set('views', path.join(__dirname, 'views')); 

app.set('view engine','ejs'); 

/* Middlewares */

app.use(express.static(path.join(__dirname, '../public')));


/* Router */
let home = require('./routes/homeRouter')
app.use('/', home);



/* Controller */


app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}
http://localhost:${PORT}
`));


/* ----------- ERROR 404 ---------------*/
/* app.use((req, res, next) => {
    res.status(404).render('404-page') 
    })
     */





