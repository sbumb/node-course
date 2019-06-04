console.log('Client side javascript file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

messageOne.textContent = ''
messageTwo.textContent = ''
messageThree.textContent = ''

fetch('http://10.163.14.32:3000/weather?address=McLean').then((response) => {
    response.json().then((data) => {
        messageOne.textContent = data.location
        messageTwo.textContent = data.summary
        messageThree.textContent = data.forecast
    })
})

weatherForm.addEventListener('submit', (e) => {
    //Prevents page from totally refreshing (ie: saves what was put into the search box)
    e.preventDefault()

    const location = search.value
    if (location === 'easteregg') {
        window.location = 'http://10.163.14.32:3000/easteregg'
    } else {
        messageOne.textContent = 'Searching...'
        messageTwo.textContent = ''
        messageThree.textContent = ''

        fetch('http://10.163.14.32:3000/weather?address=' + location).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error
                } else {
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.summary
                    messageThree.textContent = data.forecast
                }
            })
        })
    }
})