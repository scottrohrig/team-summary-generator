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
const copyFile = ( source, destination ) => {
    fs.copyFile( source, destination, ( err ) => {
        if ( err ) {
            console.log( err );
            return;
        }
        console.log( 'style.css copied successfully to ./dist/' )
    } )
}

module.exports = {writeFile, copyFile};