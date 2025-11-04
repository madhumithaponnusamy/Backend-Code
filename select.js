
const db = require('./web');


db.query('SELECT * from usersdata', (err, results) => {
  if (err) {
    console.error('Query error:', err);
  } else {
    for (var i = 0; i < results.length; i++) {
      console.log(results[i])
    }
  }

});
