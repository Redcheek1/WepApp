const mysql = require( 'mysql' );
const db_info = {
    host: 'database-1.cobmswowcpvs.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'VMware1!',
    database: 'db_test'
};

module.exports = {
    init: function () {
        return mysql.createConnection( db_info );
    },
    connect: function ( conn ) {
        conn.connect( dunction ( err ) {
            if ( err ) {
                console.log( `mysql connection error : ${err}` );
            } else {
                console.log( `mysql is connected successfully!!!` );
            }
        } );
    }
}