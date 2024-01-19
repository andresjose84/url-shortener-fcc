const { response } = require( 'express' );

const validateUrl = ( req, res = response, next ) => {

    try {
        console.log( 'Validating URL', req.body.url );

        const newUrl = new URL( req.body.url );

        if ( !isValidHttpUrl( newUrl ) ) {
            res.status( 403 ).json( {
                error: 'invalid url'
            } );
        } else {
            console.log( 'url valid' );
            next();
        }
    } catch ( error ) {
        console.log( 'error validating url', error );
        res.status( 403 ).json( {
            error: 'invalid url'
        } );
    }
};

function isValidHttpUrl ( newUrl ) {
    try {
        return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch ( err ) {
        return false;
    }
}

module.exports = validateUrl;