const greeter = (name, age = "No age entered") => {
    console.log("hello " + name)
    console.log(age)
}

greeter('steve')

const user = {
    name: 'steve',
    age: 27,
    location: "McLean"
}

const printUser = ({ name, age } = {}) => {
    console.log(name, age)
}

printUser()