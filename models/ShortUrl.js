const { Schema, model } = require( 'mongoose' );

const ShortUrlSchema = Schema( {
    original_url: {
        type: String,
        required: true,
    },
    short_url: {
        type: String,
        required: true,
        unique: true
    }
} );

const shortUrl = model( 'ShortUrl', ShortUrlSchema );

// shortUrl.watch().on( 'change', change => {
//     console.log( 'Watching for', change );
// } )

module.exports = shortUrl;