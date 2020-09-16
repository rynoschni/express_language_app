const host = "lallah.db.elephantsql.com";
const database = "qvwxqnap";
const user = "qvwxqnap";
const password = "Cv_jLBH86UdmFThNMQOYLDxf2tg7bg_P";

const pgp = require('pg-promise')({
    query: function (event) {
        console.log("QUERY:", event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}

const db = pgp(options);

module.exports = db;
