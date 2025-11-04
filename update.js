
const db = require('./web');


const updates = [
    {
        id: 81,
        name: "gayathiri",
        dob: "2002-02-23",
        email: "gayathiri@gmail.com",
        password: "23678",
    },
    {
        id: 80,
        name:"priyanka",
        dob:"2003-10-09",
        email:"priyanka23@gmail.com",
        password:"789#0"
    }
];

for (i = 0; i < updates.length; i++) {

    const updatessql = `
     UPDATE usersdata 
     SET name = '${updates[i].name}',dob = '${updates[i].dob}',email ='${updates[i].email}',password = '${updates[i].password}' 
     WHERE Usersid= ${updates[i].id}`;
    console.log(updatessql)

    db.query(updatessql, (err, result) => {
        if (err) {
            console.error(' Error updating users:', err);
        } else {
            console.log(' Updated', result);
        }

    });
}

