const ShortUrl = require( '../models/ShortUrl' );

const findUrl = async url => {
    try {
        console.log( 'findUrl' );
        const doc = await ShortUrl
            .find( {
                original_url: url
            } ).select( {
                _id: 0,
                original_url: 1,
                short_url: 1
            } );

        console.log( doc );
        console.log( doc.length );
        return doc;
    } catch ( error ) {
        console.log( 'error finding url', error );
        return null;
    }
};

module.exports = findUrl;