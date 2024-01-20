const ShortUrl = require( '../models/ShortUrl' );

const createShortUrl = async obj => {
    try {
        const shortUrl = new ShortUrl( obj );
        await shortUrl.save();
        return true;
    } catch ( error ) {
        console.log( 'error saving short url', error );
        return null;
    }
};

module.exports = createShortUrl;