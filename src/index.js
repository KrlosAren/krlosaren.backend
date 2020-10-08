const express = require('express')
const port = process.env.PORT || 3000;
const app = express()


const projects = require('../routes/projects')
const projectsID = require('../routes/projectId')

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`New UserInfo: ${userInfo}`);
});


projects(app)
projectsID(app)

app.listen(port, err => {
  if (err) {
    console.error('Error:', err)
    return
  }
  console.log(`Listen http://localhost:${port}`)
})