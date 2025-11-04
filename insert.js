
const db = require('./web');


const users = [
  ['priya', '2000-01-15', 'priya189@gmail.com', '123$67'],
  ['vijay', '2000-01-09', 'vijay@gmail.com', '17&89'],
  ['tharani', '2000-11-20', 'tharani89@gmail.com', '1234$89'],
  ['kavya', '2000-12-19', 'kavya@gmail.com', '908&89'],
];

for (var i = 0; i < users.length-3; i++) {

  const sql = "INSERT INTO usersdata (name, dob,email,password) VALUES ?";
  db.query(sql, [users], function (err, result) {
    if (err) {
      console.error('Error inserting users:', err);
    } else {
      console.log('Inserted', result);
    }
  });
}


