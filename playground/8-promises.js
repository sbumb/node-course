const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}


// WITHOUT PROMISE CHAINING
// add(1, 2).then((sum) => {
//     console.log(sum)
//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

// WITH PROMISE CHAINING

add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 2)
}).then((sum3) => {
    console.log(sum3)
}).catch((e) => {
    console.log(e)
})

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve([1, 2, 3])
//         reject('This is my error')
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log('Success!', result)
// }).catch((error) => {
//     console.log('Error:', error)
// })

//
//                                fulfilled
//                              /
// Promise      -- pending --->
//                              \
//                                rejected
//