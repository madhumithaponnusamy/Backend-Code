var express = require('express');
var app = express();
var PORT = 3001;
const db = require('./database/web')

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login Page' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'contact Page' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'about Page' });
});

app.get('/service', (req, res) => {
  res.render('service', { title: 'service Page' });
});

app.get('/form', (req, res) => {
  res.render('form', { title: 'form Page' });
});

app.get('/insert', (req, res) => {

  const users = [
    ['priya', '2000-01-15', 'priya189@gmail.com', '123$67'],
    ['vijay', '2000-01-09', 'vijay@gmail.com', '17&89'],
    ['tharani', '2000-11-20', 'tharani89@gmail.com', '1234$89'],
    ['kavya', '2000-12-19', 'kavya@gmail.com', '908&89'],
  ];

  var processed = 0
  var success = 0
  var failure = 0

  for (var i = 0; i < users.length; i++) {
    const sql = "INSERT INTO usersdata (name, dob,email,password) VALUES (?)";
    db.query(sql, [users[i]], function (err, result) {
      processed++
      if (err) {
        failure++
      } else {
        success++


        if (processed === users.length) {
          res.render('insert', { total: users.length, success: success, failure: failure })
        }
      }
    });
  }


});

app.get('/update', (req, res) => {


  const updates = [
    {
      id: 434,
      name: "gayathiri",
      dob: "2002-02-23",
      email: "gayathiri@gmail.com",
      password: "23678",
    },
    {
      id: 435,
      name: "priyanka",
      dob: "2003-10-09",
      email: "priyanka23@gmail.com",
      password: "789#0"
    }
  ];


  var processed = 0
  var success = 0
  var failure = 0

  for (i = 0; i < updates.length; i++) {

    const {
      name,
      dob,
      email,
      password,
      id,
    } = updates[i]

    const updatessql = /*sql*/`UPDATE usersdata SET 
        name = '${name}',
        dob = '${dob}',
        email ='${email}',
        password = '${password}' 
    WHERE Usersid= ${id}`;
    console.log(updatessql)

    db.query(updatessql, (err, result) => {
      processed++
      if (err) {
        failure++
      } else {
        success++

        if (processed === updates.length) {
          res.render('update', { total: updates.length, success: success, failure: failure })
        }
      }
    });
  }


});

app.get('/select', (req, res) => {



  db.query(`SELECT * FROM usersdata`, (err, results) => {
    if (err) {
      console.error('Query error:', err);

    } else {
      console.log('Database query successed');
    }

    var processed = 0;
    var success = 0;
    var failure = 0;
  
    for (var i = 0; i < results.length; i++) {
      console.log(results[i]);
      processed++;
      success++;
    }

   
    res.render('select', {
      total: processed,
      success: success,
      failure: failure
    });
  });

});



app.get('/delete', (req, res) => {


  const todelete = [
    { id: 428 },
    { id: 432 },
    { id: 433 }
]

  var processed = 0
  var success = 0
  var failure = 0

for (let i = 0; i < todelete.length; i++) {
    const deletesql = `DELETE FROM usersdata WHERE Usersid = ?`;

    db.query(deletesql, [todelete[i].id], (err, results) => {
      processed++

        if (err) {
          console.error('Delete error:', err);
           failure++
        } else {
           console.log('Deleted rows:', results.affectedRows);
           success++
           
           if (processed === todelete.length) {
          res.render('delete', { total: todelete.length, success: success, failure: failure })
        }
        }
    });
}
});



function afterComplete(error) {
  if (error === undefined) {
    console.log(`Server running at http://localhost:${PORT}`);
  } else {
    console.log(error)
  }
}


app.listen(PORT, afterComplete);
