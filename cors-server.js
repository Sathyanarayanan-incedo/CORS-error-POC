const express = require('express')
const app = express()
const port = 4000

//Install cors package using npm i cors at first to use it in the server.

const cors = require('cors')    //On commenting this line CORS error will occur.
app.use(cors())    //On commenting this line CORS error will occur.

let Cors_err = {
  CORS_err : `CORS actually stands for Cross-Origin Resource Sharing and it is a mechanism that allows services
  to communicate with each other but Same Origin Policy (SOP) is a mechanism implemented by modern web browsers
  that block your application from requesting data that lives on a different URL. If you make a request that 
  lives on a different URL or origin, the browser will block the data from being shared in your application.
  This is what gives rise to CORS error.`
}

app.get('/', (req, res) => {
  res.send(Cors_err)  
})

app.listen(port, () => {
  console.log(`CORS server listening on port ${port}`)
})