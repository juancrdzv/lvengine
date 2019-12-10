let express = require('express');
let app = express();
let mysql = require('mysql');
let cors = require('cors');
let bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');

const SECRET = 'Secret Password';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'game'
});

connection.connect();

app.get('/', (req, res) => {
    res.send('Index Page');
});

app.post('/login', (req, res) => {
    const { body: { username, password } } = req;

    connection.query(`SELECT * FROM user WHERE username='${username}' AND password='${password}'`, (err, rows, fields) => {
        if (err) throw err;

        let token = jwt.sign({ username, id: rows[0].id }, SECRET, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        });

        res.status(200).send({
            token,
            id: rows[0].id
        });
    });
});

app.post('/snapshot', (req, res) => {
    const { body: { token, snapshot, id } } = req;

    let payload = jwt.verify(token, SECRET);

    const { username } = payload;

    if (username) {
        const now = new Date()
        const secondsSinceEpoch = Math.round(now.getTime() / 1000)

        const jsonName = `${username}${secondsSinceEpoch}`;

        connection.query(`INSERT INTO snapshots (name,data,user_id) VALUES ('${jsonName}','${snapshot}',${id})`, (err, rows, fields) => {
            if (err) {
                res.status(500);
                console.log(err);
                return;
            }
            res.status(200).send({ message: 'Snapshot created' });
            console.log('snapshot created');
        });
    }
});

app.post('/signin', (req, res) => {
    const { body: { name, lastName, email, username, password } } = req;

    console.log(username);
    console.log(password);

    connection.query(`INSERT INTO user (username,name,last_name,password,email) VALUES ('${username}','${name}','${lastName}','${password}','${email}')`,(err,rows,fields)=>{
        if (err) {
            res.status(500);
            console.log(err);
            return;
        }
        res.status(200).send({ message: 'User created' });
        console.log('user created');
    });
});

app.get('/snapshots', (req, res) => {
    const { query: { tk } } = req;

    let payload = jwt.verify(tk, SECRET);

    const { id } = payload;

    connection.query(`SELECT * FROM snapshots WHERE user_id=${id}`, (err, rows, fields) => {
        if (err) {
            res.status(500);
            console.log(err);
            return;
        }

        console.log('return snapshots');
        res.status(200).send({ snapshots: rows });
    });
});

app.listen('3008');