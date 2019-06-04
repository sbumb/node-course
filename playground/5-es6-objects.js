//Object property shorthand

const name = 'Steve'
const userAge = 27

const user = {
    //name: name, does same as below
    name,
    age: userAge,
    location: 'McLean'
}


const hello = { hi: 'haha', age: 19, loc: 'Mclean', 'test': 5 }
hello['test'] = 10
console.log(hello)

console.log(user)

//Object destructuring

const product = {
    label: 'Notebook',
    price: 3,
    stock: 311,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const { label, stock: newStockVariable, rating = 5 } = product
console.log(label)
console.log(newStockVariable)
console.log(rating) //This is a default value since it doesn't exist in product

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)
