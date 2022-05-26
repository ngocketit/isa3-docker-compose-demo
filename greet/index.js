const express = require('express')
const app = express()
const port = 9000
const axios = require('axios')

app.get('/greet/:name', (req, res) => {
  res.json({
    message: `From greet - Hello ${req.params.name}`,
  })
})

app.get('/add/:first/:second', (req, res) => {
  axios.get(`http://cal:9000/sum/${req.params.first}/${req.params.second}`)
  .then(resp => {
    console.log(resp)
    res.json({
      sum: resp.data.result,
    })
  })
  .catch(err => {
    console.error(err)
  })
})

app.listen(port, () => {
  console.log(`Greet is running on: ${port}`)
})
