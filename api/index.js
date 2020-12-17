const express = require('express')

const api = express()
api.use(express.json())

api.post('/subscribe', (req, res) => {
  console.log(req.body)
  res.end()
})

export default api
