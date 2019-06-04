require('../src/db/mongoose')
const Task = require('../src/models/task')
const chalk = require('chalk')

// Task.findByIdAndDelete('5cf53650092bae3118c91eee').then((task) => {
//     console.log(chalk.bgRed('Document removed'))
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(chalk.bgGreen('Documents left'))
//     console.log(result)
// }).catch((e) => {
//     console.log(chalk.red(e))
// })

const deleteAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteAndCount('5cf56d56973d601fecc10a6d').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})