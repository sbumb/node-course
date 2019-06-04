//CRUD create, read, update, delete

// const mongodb = require('mongodb')
const chalk = require('chalk')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const dbName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(chalk.bgRed('Unable to connect to the database'))
    }

    console.log(chalk.bgGreen('Connected!'))
    const db = client.db(dbName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5cf166def4b5bd34f0e863c7')
    // }, {
    //         $set: {
    //             name: 'UpdatedName'
    //         }
    //     }).then((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // db.collection('users').deleteMany({
    //     age: 33
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'Walk dog'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     name: 'Steve'
    // }, {
    //         $inc: {
    //             age: 1
    //         }
    //     }).then((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // db.collection('users').updateMany({

    // }, {
    //         $inc: {
    //             age: 1
    //         }
    //     }).then((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // const completeAllTasks = () => {
    //     db.collection('tasks').updateMany({

    //     }, {
    //             $set: {
    //                 completed: true
    //             }
    //         }).then((result) => {
    //             console.log(result)
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }

    // completeAllTasks()

    // db.collection('users').findOne({
    //     name: 'Steve'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('users').findOne({ _id: new ObjectID('5cf16d1a349f8e315ca35acf') }, (error, result) => {
    //     if (error) {
    //         return console.log(chalk.bgRed('Unable to fetch user'))
    //     }

    //     console.log(result)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('5cf16a11f49adf42d82f0402') }, (error, lastTask) => {
    //     console.log(chalk.green('LAST TASK'))
    //     console.log(lastTask)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, notComplete) => {
    //     console.log(chalk.blue('NOT COMPLETED'))
    //     console.log(notComplete)
    // })

    // db.collection('tasks').find({ completed: false }).count((error, countNotComplete) => {
    //     console.log(chalk.grey('COUNT NOT COMPLETE'))
    //     console.log(countNotComplete)
    // })

    // db.collection('users').insertOne({
    //     name: 'TestUniqueID',
    //     age: 0
    // }, (error, result) => {
    //     if (error) {
    //         return console.log(chalk.bgRed('Unable to insert user'))
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Dan',
    //         age: 22
    //     }, {
    //         name: 'Sam',
    //         age: 20
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(chalk.bgRed('Unable to insert users'))
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Take out trash',
    //         completed: true
    //     }, {
    //         description: 'Go food shopping',
    //         completed: false
    //     }, {
    //         description: 'Walk dog',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(chalk.bgRed('Unable to insert tasks'))
    //     }

    //     console.log(chalk.green('Task List'))
    //     console.log(result.ops)
    // })

})