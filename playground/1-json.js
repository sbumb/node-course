const fs = require('fs')

// const book = {
//     title: 'This is the Book Title',
//     author: 'Some person'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Steve'
data.age = '28'

const newJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', newJSON)