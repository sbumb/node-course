const doWorkCallBack = (callback) => {
    setTimeout(() => {
        //callback('This is my error', undefined)
        callback(undefined, 'This is a success')
    }, 2000)
}

doWorkCallBack((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})