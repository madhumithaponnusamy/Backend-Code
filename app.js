var express = require('express');
var app = express();
var PORT = 3001;
const db = require('./database/web')

var methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

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

app.get('/student', (req, res) => {
  res.render('studentForm', { title: 'Student Creattion', student: {} });
});


app.post('/insert', (req, res) => {

  console.log(req.query)
  console.log(req.body)

  const sql = "INSERT INTO usersdata (name, dob,email,password) VALUES (?,?,?,?)";
  db.query(sql, [
    req.body.name,
    req.body.dob,
    req.body.email,
    req.body.password
  ], function (err, result) {

    res.render('insert', { err, result })
  });


});

//Insert method//
app.post('/student', (req, res) => {
  console.log(req.query);
  console.log(req.body);


  const sql = `
    INSERT INTO studentsdata 
    (name, age, email, password, dob, phoneNumber, gender, subjects, place, club, address)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const subjects = Array.isArray(req.body.subjects) ? req.body.subjects.join(',') : ''
  const clubs = Array.isArray(req.body.club) ? req.body.club.join(',') : ''

  const values = [
    req.body.name,
    req.body.age,
    req.body.email,
    req.body.password,
    req.body.dob,
    req.body.phoneNumber,
    req.body.gender,
    subjects,
    req.body.place,
    clubs,
    req.body.address
  ];

 

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(' SQL Insert Error:', err);
    } else {
      console.log(' Insert Success:', result);
    }
    res.redirect('/select')
  });
});


//update method//
app.put('/student/:id', (req, res) => {
  const id = req.params.id;
  const {
    name,
    age,
    email,
    password,
    dob,
    phoneNumber,
    gender,
    subjects,
    place,
    club,
    address
  } = req.body;

  const sql = `
    UPDATE studentsdata SET
      name = ?, 
      age = ?, 
      email = ?, 
      password = ?, 
      dob = ?, 
      phoneNumber = ?, 
      gender = ?, 
      subjects = ?, 
      place = ?, 
      club = ?, 
      address = ?
    WHERE studentId = ?
  `;

  const values = [
    name, age, email, password, dob, phoneNumber, gender,
    subjects, place, club, address, id
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Update error:', err);
      return res.status(500).send('Database error');
    }

    console.log('Updated student:', result);
    res.redirect('/select');
  });
});



//select method//
app.get('/select', (req, res) => {
  const sql = `SELECT * FROM studentsdata`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Query error:', err);
      return res.status(500).send('Database error');
    }
    res.render('select', { title: 'Students List', results });
  });
});

app.get('/student/edit/:studentId', (req, res) => {
  const studentId = req.params.studentId;

  const sql = `SELECT * FROM studentsdata WHERE studentId = ?`;
  db.query(sql, [studentId], (err, results) => {
    if (err) {
      console.error('Query error:', err); // doubt
      return res.status(500).send('Database error');
    }

    if (results.length === 0) {
      return res.status(404).send('Student not found');
    }

    res.render('studentForm', { title: 'Update Student', student: results[0] });
  });
});






app.delete('/delete', (req, res) => {

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
