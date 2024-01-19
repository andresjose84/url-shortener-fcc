const ShortUrl = require( '../models/ShortUrl' );

const createShortUrl = async obj => {
    try {
        console.log( 'createShortUrl' );
        const shortUrl = new ShortUrl( obj );
        const res = await shortUrl.save();
        console.log( 'Url save', res );
        return true;
    } catch ( error ) {
        console.log( 'error saving short url', error );
        return null;
    }
};

module.exports = createShortUrl;