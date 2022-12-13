//user sql functions
const db = require('../database');//fix
const createUser = require('../controllers/user');

module.exports = class User {
    save() {//edit so it saves
        return (new Promise((resolve, reject) => {
            db.execute("INSERT INTO dbo.Users (UserID, Name, Email, Password)VALUES(null,'"+ user.name +"','"+ user.email +"', '"+ user.password +");");
                //.then(([rows, fieldData]) => {
                  //  resolve(rows); // return data
               // })
        }))

    }
}