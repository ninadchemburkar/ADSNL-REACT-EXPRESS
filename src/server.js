const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ADNSL_2020', //password of your mysql db
  database: 'simple-react-sql-db'
});

connection.connect(function(err) {
  err
    ? console.log(err + '+++++++++++++++//////////')
    : console.log('connection********');
});

require('./routes/html-routes')(app, connection);
