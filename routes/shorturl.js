const { Router } = require( "express" );
const bodyParser = require( 'body-parser' );

const validateUrl = require( "../middlewares/validateUrl" );
const { shorturl, getShortUrl } = require( "../controllers/shorturl" );

const router = Router();

//BodyParser
const urlencodeparser = bodyParser.urlencoded( { extended: false } );
const jsonParser = bodyParser.json();

router.post( '/shorturl', [
    urlencodeparser, jsonParser, validateUrl
], shorturl );

router.get( '/shorturl/:short_url', getShortUrl );


module.exports = router;