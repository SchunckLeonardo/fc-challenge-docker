const express = require('express')
const mysql = require('mysql')

const app = express()

const PORT = 8080

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'fullcycle'
}

const connection = mysql.createConnection(config)

connection.connect()

connection.query(`
    CREATE TABLE people (
        id INT AUTO_INCREMENT,
        name VARCHAR(255),

        PRIMARY KEY (id)
    )`, (error, _) => {
        if (error) return
    })

const queryInsertPeople = `INSERT INTO people (name) VALUES ('Leonardo')`
connection.query(queryInsertPeople)

app.get('/', (req, res) => {
    try {
        const querySelectName = `SELECT name FROM people`
        connection.query(querySelectName, (error, results) => {
            if (error) throw error
            res.send(`
                <h1>Full Cycle Rocks!</h1>
                ${results[0].name}
            `)
        })
    } catch(err) {
        console.log('An unexpected error happened: ' + err)
    }
})

process.on('exit', () => {
    connection.end()
})

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})