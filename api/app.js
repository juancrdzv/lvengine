let express = require('express');
let app = express();
let mysql = require('mysql');
let cors = require('cors');
let bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
});

connection.connect();

app.get('/', (req, res) => {
    res.send('Index Page');
});

app.post('/login', (req, res) => {
    const { body: { username, password } } = req;

    connection.query(`SELECT * FROM user WHERE username='${username}' AND password='${password}'`, (err, rows, fields) => {
        if (err) throw err;

        let token = jwt.sign({ username }, 'Secret Password', {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        });

        res.send({
            token
        });
    });
});

app.post('/snapshot', (req, res) => {
    const { body: { token, snapshot } } = req;

    let payload = jwt.verify(token, 'Secret Password');

    const { username } = payload;

    if (username) {
        const now = new Date()
        const secondsSinceEpoch = Math.round(now.getTime() / 1000)
        
        const jsonName = `${username}${secondsSinceEpoch}`;
    }
});


app.listen('3008');