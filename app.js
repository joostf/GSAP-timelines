const express = require('express')
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const bodyParser = require("body-parser")
const login = require('./routes/login')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
    .use(express.json())
    .use(express.urlencoded())  
    .use('/', indexRouter)
    .use('/api', apiRouter)
    .use('/login', login)

    
app.listen(PORT, function() {
    console.log(`Application started on port: ${PORT}`);
});