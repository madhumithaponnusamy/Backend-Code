
const db = require('./web');


const todelete = [
    { id: 88 },
    { id: 89 },
    { id: 233 }
]
for (let i = 0; i < todelete.length; i++) {
    const deletesql = `DELETE FROM usersdata WHERE Usersid = ?`;

    db.query(deletesql, [todelete[i].id], (err, results) => {
        if (err) {
            console.error('Error deleting user:', err);
        } else {
            console.log('Deleted:', results);
        }
    });
}





