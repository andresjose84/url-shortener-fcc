const ShortUrl = require( '../models/ShortUrl' );

const findLastDoc = async () => {
    try {
        const doc = await ShortUrl
            .find()
            .limit( 1 )
            .sort( {
                short_url: -1
            } )
            .select( {
                short_url: 1
            } );

        return doc.length === 0 ? 0 : doc[0].short_url;
    } catch ( error ) {
        return null;
    }
};

module.exports = findLastDoc;