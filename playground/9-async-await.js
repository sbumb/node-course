const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be greater than 0')
            }
            resolve(a + b)
        }, 2000)
    })
}
// ASYNC/AWAIT VS PROMISE CHAINING

//ASYNC/AWAIT
const doWork = async () => {
    const sum = await add(1, 99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, 3)
    return sum3
}

// PROMISE CHAINING
// add(1, 1).then((sum) => {
//     console.log(sum)
//     return add(sum, 4)
// }).then((sum2) => {
//     console.log(sum2)
//     return add(sum2, 2)
// }).then((sum3) => {
//     console.log(sum3)
// }).catch((e) => {
//     console.log(e)
// })

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})

