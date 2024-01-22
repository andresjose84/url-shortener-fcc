require( 'dotenv' ).config();

const express = require( 'express' );
const app = express();
const port = process.env.PORT;
const path = require( 'path' );
const cors = require( 'cors' );

const dbConnection = require( './database/config' );

//console.log( process.env );

//Database
dbConnection();

//CORS
app.use( cors() );

//Directorio Publico
app.use( express.static( path.join( __dirname, 'public' ) ) );

//Lectura y parseo del body
app.use( express.json() );

//Rutas:
app.use( '/api', require( './routes/shorturl' ) );


app.listen( port, () => console.log( `Shorter url app listening on port ${ port }!` ) );
