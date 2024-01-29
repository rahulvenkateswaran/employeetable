//const express=require('express')
const mysql=require('mysql')
//const cors=require('cors')
//const router=express.Router()

//app.use(cors())
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database:"employeeDetails"
});
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

  exports.dispemployee=(req,res)=>{
    db.query('SELECT * FROM employeeInformation', (err, results) => {
         if (err) throw err;
           res.json(results);

  })
  }

  exports.insertemployee=(req,res)=>{
    const { employeeName,dateOfBirth, contactNumber,Address,details } = req.body;
  db.query(
    'INSERT INTO employeeInformation (employeeName,dateOfBirth,contactNumber,Address,details) VALUES (?,?,?,?)',
    [employeeName,dateOfBirth,contactNumber,Address,details],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  )
  }

  exports.updateemployee=(req,res)=>{
    const EmployeeName = req.params.employeeName;
  const { employeeName,dateOfBirth, contactNumber,Address,details } = req.body;
  db.query(
    'UPDATE employeeInformation SET employeeName=?, dateOfBirth=?, contactNumber=?,Address=?,details=? WHERE employeeName=?',
    [employeeName,dateOfBirth,contactNumber,Address,details,EmployeeName],
    (err, result) => {
      if (err) throw err;
      res.json(result);
    }
  );
  }


  exports.deleteemployee=(req,res)=>{
    const employeeName = req.params.employeeName;
  db.query('DELETE FROM employeeInformation WHERE employeeName=?', [employeeName], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
  }

//module.exports=new Empconfigcontroller()
