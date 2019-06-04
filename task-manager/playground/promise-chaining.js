require('../src/db/mongoose')
const User = require('../src/models/user')

// 5cf5663e4efbf114e07ba0a8

// User.findByIdAndUpdate('5cf52eb4235c622ffc95fbf0', { age: 10 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 27 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return { user, count }
}

updateAgeAndCount('5cf52eb4235c622ffc95fbf0', 28).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})