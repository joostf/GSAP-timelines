require('dotenv').config()
const bodyParser = require('body-parser')

const express = require('express')
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const adminRouter = require('./routes/admin')
const loginRouter = require('./routes/login')
const enqueteRouter = require('./routes/enquete_form')
// const mailRouter = require('./modules/mail')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
    .use(express.json())
    .use(express.urlencoded())  
    .use('/', indexRouter)
    .use('/api', apiRouter)
    .use('/login', loginRouter)
    .use('/admin', adminRouter)
    .use('/enquete/form', enqueteRouter)
    .use(bodyParser.urlencoded({extended: true}))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    //.use('/mail', mailRouter)
    
app.listen(PORT, function() {
    console.log(`Application started on port: ${PORT}`);
});