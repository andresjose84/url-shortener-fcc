const { response } = require( 'express' );
const { findLastDoc, createShortUrl, findUrl, findShortUrl } = require( '../helpers' );

const shorturl = async ( req, res = response ) => {
    try {

        const { url } = req.body;

        const urlExist = await findUrl( url );

        if ( urlExist.length !== 0 ) {
            res.status( 200 ).json( {
                ...urlExist[ 0 ]._doc
            } );
        } else {
            const shortUrl = await findLastDoc();
            const obj = {
                original_url: url,
                short_url: Number( shortUrl ) + 1
            }
            const resShortUrl = await createShortUrl( obj );
            if ( resShortUrl ) {
                res.status( 200 ).json( obj );
            } else {
                res.status( 500 ).json( {
                    error: 'error creating short url'
                } );
            }
        }
    } catch ( error ) {
        console.log( 'Error creating', error );
        res.status( 400 ).json( {
            error: 'url not found'
        } );
    }
};

const getShortUrl = async ( req, res = response ) => {
    try {
        const { short_url } = req.params;
        const original_url = await findShortUrl( { short_url } );
        if ( original_url ) {
            res.redirect( original_url );
        } else {
            res.status( 400 ).json( { error: 'url not found' } );
        }
    } catch ( error ) {
        console.log( 'Error getting short url', error );
        res.status( 400 ).json( { error: 'url not found' } );
    }
};

module.exports = {
    getShortUrl,
    shorturl
};
