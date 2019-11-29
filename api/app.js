let express = require('express');
let app = express();
let mysql = require('mysql');
let cors = require('cors');
let bodyParser = require('body-parser');
let jwt  = require('jsonwebtoken');

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

        let token = jwt.sign({ username: req.username }, 'Secret Password', {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        });

        res.send({
            token
        });
    });
});

app.get('/users', (req, res) => {
    connection.query('SELECT * FROM user', (err, rows, fields) => {
        if (err) throw err;
        console.log('User :', rows[0]);
    });
    res.send('Index Page');
});

app.listen('3008');