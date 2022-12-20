var exp = require('express')
var sql = require('mysql2')
var bp = require('body-parser')
var cors = require('cors')
const { connect } = require('http2')
// const { hostname } = require('os')

var app = exp()
app.use(bp.json())
app.use(cors())

var con = sql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: 'root',
  password: 'root1234',
  // port:3306,
  database: 'test'
})

con.connect((err) => {
  if (!err)
    console.log("Connected succesfully...")
  else
    console.log(err)
})

// app.post('./')
app.get('/emps', (req, res) => {
  console.log("recieved request...")
  con.query('select * from emp', (err, data) => {
    if (!err) {
      res.send(JSON.stringify(data))
    }
  })
})

app.post('/emps/create', (req, res) => {
  console.log(' Request recieved....')
  console.log(req.body)
  var comm = req.body.comm.value
  var deptno = req.body.deptno.value
  var empno = req.body.empno.value
  var ename = req.body.ename.value
  var hiredate = req.body.hiredate.value
  var job = req.body.job.value
  var mgr = req.body.mgr.value
  var netsal = req.body.netsal.value
  var sal = req.body.sal.value

  con.query(`insert into emp values(${empno},"${ename}","${job}",${mgr},"${hiredate}",${sal},${comm},${netsal},${deptno})`, (err, data) => {
    if (!err)
      res.send(JSON.stringify(data))
    else
      console.log(err)

  })

})
app.listen(9000, console.log("Server Started..."))