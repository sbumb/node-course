const express = require('express')
const chalk = require('chalk')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(chalk.bgGreen('Server is up on port ' + port))
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'fakeID' }, 'thisismysecretphraseforthetoken', { expiresIn: '0 second' })
    console.log(token)
    //header.payload.signature

    const payload = jwt.verify(token, 'thisismysecretphraseforthetoken')
    console.log(payload)
}

myFunction()