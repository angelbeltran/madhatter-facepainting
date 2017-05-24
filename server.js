const express = require('express')
const app = express()

app.use('/madhatter-facepainting/', express.static('.'))

app.listen(3000, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('listening on 3000...')
  }
})
