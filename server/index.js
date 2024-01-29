const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors=require('cors')
const path=require('path')
//const apiroutrs=require('./routes')
//const apiroutes=require('./routes/apiroutes')
//const apiroutes=require('./apiroutes')

const routes=require('./routes/index')

const app = express();
app.use(cors())
const port = 3000;

app.use(bodyParser.json());

routes(app)
//app.use(apiroutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database:"employeeDetails"
// });

// db.connect(err => {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }
//   console.log('Connected to database');
// });
//routes(app)
// db.query(`
//   CREATE TABLE IF NOT EXISTS employeeInformation (

//     employeeName VARCHAR(255) NOT NULL,
//     dateOfBirth VARCHAR(225) NOT NULL,
//     contactNumber VARCHAR(255) NOT NULL,
//     Address VARCHAR(255) NOT NULL
//   )
// `);

// API endpoints
// app.get('/employee', (req, res) => {
//   db.query('SELECT * FROM employeeInformation', (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post('/employee', (req, res) => {
//   const { employeeName,dateOfBirth, contactNumber,Address } = req.body;
//   db.query(
//     'INSERT INTO employeeInformation (employeeName,dateOfBirth,contactNumber,Address) VALUES (?,?,?,?)',
//     [employeeName,dateOfBirth,contactNumber,Address],
//     (err, result) => {
//       if (err) throw err;
//       res.json(result);
//     }
//   );
// });

// app.put('/employee/:employeeName', (req, res) => {
//    const EmployeeName = req.params.employeeName;
//   const { employeeName,dateOfBirth, contactNumber,Address } = req.body;
//   db.query(
//     'UPDATE employeeInformation SET employeeName=?, dateOfBirth=?, contactNumber=?,Address=? WHERE employeeName=?',
//     [employeeName,dateOfBirth,contactNumber,Address,EmployeeName],
//     (err, result) => {
//       if (err) throw err;
//       res.json(result);
//     }
//   );
// });

// app.delete('/employee/:employeeName', (req, res) => {
//   const employeeName = req.params.employeeName;
//   db.query('DELETE FROM employeeInformation WHERE employeeName=?', [employeeName], (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

