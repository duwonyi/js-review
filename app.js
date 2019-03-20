const express = require('express')

const app = express()

app.get('*', (req, res) => res.send('Hello JS review!!'))

app.listen(3005, () => console.log('App is running at localhost:3005'))
