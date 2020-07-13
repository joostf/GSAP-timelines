require('dotenv').config()

const express = require('express')
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const adminRouter = require('./routes/admin')
const loginRouter = require('./routes/login')
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
    .use('/login', loginRouter)
    .use('/admin', adminRouter)
    
app.listen(PORT, function() {
    console.log(`Application started on port: ${PORT}`);
});