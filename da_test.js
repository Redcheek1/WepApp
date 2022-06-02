const mysql = require( 'mysql' );
const connection = mysql.createConnection( {
    host: 'database-1.cobmswowcpvs.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'VMware1!',
    database: 'db_test'
} );

connection.connect( ( err )  => {
    if ( err ) {
        throw err;
    } else {
        connection.query( 'SELECT * FROM board', ( err, rows, fields ) => {
            console.log( rows );
        } );
    }
} );
