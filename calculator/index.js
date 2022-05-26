const express = require('express')
const app = express()
const port = 9000

app.get('/sum/:first/:second', (req, res) => {
  const first = parseInt(req.params.first)
  const second = parseInt(req.params.second)

  res.json({
    result: first + second,
  })
})

app.listen(port, () => {
  console.log(`Calculator is running on: ${port}`)
})
