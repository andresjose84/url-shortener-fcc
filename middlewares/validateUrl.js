const { response } = require( 'express' );

const validateUrl = ( req, res = response, next ) => {

    try {
        const newUrl = new URL( req.body.url );

        if ( !isValidHttpUrl( newUrl ) ) {
            res.status( 200 ).json( {
                error: 'invalid url'
            } );
        } else {
            req.body.url = newUrl.href;
            next();
        }
    } catch ( error ) {
        console.log( 'error validating url', error );
        res.status( 200 ).json( {
            error: 'invalid url'
        } );
    }
};

function isValidHttpUrl ( newUrl ) {

    try {
        return ( newUrl.protocol === 'http:' || newUrl.protocol === 'https:' );
    } catch ( err ) {
        return false;
    }
}

module.exports = validateUrl;