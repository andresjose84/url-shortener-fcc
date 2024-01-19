const ShortUrl = require( '../models/ShortUrl' );

const findLastDoc = async () => {
    try {
        console.log( 'findLastDoc' );
        const doc = await ShortUrl
            .find()
            .limit( 1 )
            .sort( {
                short_url: -1
            } )
            .select( {
                short_url: 1
            } );

        console.log( doc );
        console.log( doc.length );
        return doc.length === 0 ? 0 : doc[0].short_url;
    } catch ( error ) {
        return null;
    }
};

module.exports = findLastDoc;