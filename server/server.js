const path = require('path')
const express = require('express')

const books = require('./routes/books')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/books', books)

module.exports = server
