// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

// Use cors middleware
app.use(cors());

// Replace 'your_access_database.accdb' with the actual path to your Access database file
const databasePath = './office-inventory.accdb';

app.get('/api/data', (req, res) => {
    const sql = "SELECT * FROM Items WHERE Item='Bread'"; // Adjust the SQL query based on your database schema

    const sqlConfig = 'Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=' + databasePath;

    const sqlClient = require('msnodesqlv8');
    sqlClient.query(sqlConfig, sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Data not loaded');
        } else {
            res.json(results);
        }
    });
    // const sql2 = 'SELECT * FROM Items WHERE Item="Bread"';

    // sqlClient.query(sqlConfig, sql2, (err, results) => {
    //     if (err) {
    //         console.error(err);
    //         res.status(500).send('Data not loaded');
    //     } else {
    //         res.json(results);
    //     }
    // });

});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
