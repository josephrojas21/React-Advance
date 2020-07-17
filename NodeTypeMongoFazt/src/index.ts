import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
import createAuth0Client from '@auth0/auth0-spa-js';




//import routes
import IndexRoutes from './routes/index'
import BooksRoutes from './routes/books'

// Initialization
import './database'
const app = express();

//settings
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname:'.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main' 
}));

app.set('view engine', '.hbs');

// MIddlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and 
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://lean-arl-tech.auth0.com/.well-known/jwks.json`
    }),
  
    // Validate the audience and the issuer.
    audience: 'https://leantechARL/apiPrueba',
    issuer: `https://lean-arl-tech.auth0.com/`,
    algorithms: ['RS256']
  });


//Routes

//app.use(checkJwt);

app.get('/authorized', function (req, res) {
    createAuth0Client({
        domain: 'lean-arl-tech.auth0.com',
        client_id: 'ztDKnk5FCsYdcRKtQ27pzXFLaM3efhIB',
        window: 'false'
      }).then(auth0 => {
        console.log(auth0);
        
    }, (error) => console.log(error));
    res.send('Secured Resource');
});

// app.get('/api/public', (req, res) => {
//     res.json({
//       message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
//     });
//   });
  
//   // This route needs authentication
// app.get('/api/private', checkJwt, (req, res) => {
//     res.json({
//       message: 'Hello from a private endpoint! You need to be authenticated to see this.'
//     });
// });


app.use('/',IndexRoutes)
app.use('/books',  BooksRoutes)

//Static files
app.use(express.static(path.join(__dirname, 'public')));


//Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})