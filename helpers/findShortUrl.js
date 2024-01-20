const ShortUrl = require( '../models/ShortUrl' );

const findShortUrl = async obj => {
    try {
        const doc = await ShortUrl
            .find( obj );

        if ( doc.length > 0 ) {
            return doc[ 0 ]._doc.original_url;
        } else {
            return null;
        }
    } catch ( error ) {
        console.log( 'error finding url', error );
        return null;
    }
};

module.exports = findShortUrl;