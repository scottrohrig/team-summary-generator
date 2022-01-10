const fs = require( 'fs' );

const writeFile = fileContent => {
    fs.writeFile( './dist/team-summary.html', fileContent, ( err ) => {
        if ( err ) {
            console.log( err );
            return;
        }
        console.log( 'Summary created! Check ./dist/team-summary.html for verification.' );
    } )
};

module.exports = writeFile;