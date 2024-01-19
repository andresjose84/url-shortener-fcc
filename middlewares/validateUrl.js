const { response } = require( 'express' );

const validateUrl = ( req, res = response, next ) => {

    try {
        console.log( 'Validating URL', req.body.url );
        if ( !new URL( req.body.url ) ) {
            res.status( 403 ).json( {
                error: 'invalid url'
            } );
        }
    } catch ( error ) {
        console.log( 'error validating url', error );
        res.status( 403 ).json( {
            error: 'invalid url'
        } );
    }
    console.log( 'url valid' );
    next();
};

module.exports = validateUrl;