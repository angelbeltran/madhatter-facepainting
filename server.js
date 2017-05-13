const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(3000, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('listening on 3000...')
  }
})
