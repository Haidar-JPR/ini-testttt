const express = require('express')
const cors = require('cors')
const siswaRoute = require('./routes/siswaRouter')

const app = express()
const port = 5000

// middleware 
app.use(cors());
app.use(express.json());
app.use('/siswa', siswaRoute)

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
})