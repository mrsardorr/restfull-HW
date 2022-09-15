const express = require('express')
const app = express()

app.use(express.urlencoded({  extended:true }))

const usersRouter = require('./routes/users')


app.use('/',(res,req,next)=>{
    console.log('this is cuttern middleware')
    next()
})

app.use('/', usersRouter)



const port = 9999
app.listen(9999,()=>{
    console.log('nice =)' + 'port' + port)
})
