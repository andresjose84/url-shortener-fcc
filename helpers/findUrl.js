const ShortUrl = require( '../models/ShortUrl' );

const findUrl = async url => {
    try {
        const doc = await ShortUrl
            .find( {
                original_url: url
            } ).select( {
                _id: 0,
                original_url: 1,
                short_url: 1
            } );

        return doc;
    } catch ( error ) {
        console.log( 'error finding url', error );
        return null;
    }
};

module.exports = findUrl;