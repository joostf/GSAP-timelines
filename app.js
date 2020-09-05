require('dotenv').config()

const express = require('express')
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const adminRouter = require('./routes/admin')
const loginRouter = require('./routes/login')
const enqueteRouter = require('./routes/enquete')
// const mailRouter = require('./routes/mail')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

// const mail = require('./routes/mail')

// const users = [{
//     email: 'gioggmspam@gmail.com',
//     id: 1,
// }, {
//     email: 'sinryaqua2000@gmail.com',
//     id: 2,
// }];
// mail.sendEmail(users)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))
    .use(express.json())

    .use(express.urlencoded())  
    .use('/', indexRouter)
    .use('/api', apiRouter)
    .use('/login', loginRouter)
    .use('/enquete', enqueteRouter)
    .use('/admin', adminRouter)
    //.use('/mail', mailRouter)
    
app.listen(PORT, function() {
    console.log(`Application started on port: ${PORT}`);
});