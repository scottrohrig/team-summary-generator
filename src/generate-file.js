const fs = require( 'fs' );

const writeFile = fileContent => new Promise( ( resolve, reject ) => {
    fs.writeFile( '../dist/team-summary.html', JSON.stringify( fileContent ), ( err ) => {
        if ( err ) throw err;
        console.log( 'Summary created! Check ./dist/team-summary.html for verification.' );
    } )
} );

module.exports = writeFile;