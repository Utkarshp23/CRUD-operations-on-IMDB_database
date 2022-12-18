var exp = require('express')
var sql = require('mysql2')
var bp = require('body-parser')
var cors = require('cors')
const { connect } = require('http2')
// const { hostname } = require('os')

var app = exp()
app.use(bp.urlencoded({ extended: true }))
app.use(cors())

var con = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
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
app.listen(9000, console.log("Server Started..."))