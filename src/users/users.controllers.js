const uuid = require('uuid')

const userDB = [{
    id: 1,
    first_name: 'Jose',
    last_name: 'Tizon',
    email: 'joset@email.com',
    password: 'abc123',
    birthday: new Date('December 15, 1997')
},{
    id: 2,
    first_name: 'Alfredo',
    last_name: 'Pinelo',
    email: 'alfredop@email.com',
    password: 'abc456',
    birthday: new Date('July 16, 1999')
}]

const getAllUsers = () => {
    return userDB
}

const getUserById = (id) =>{
    const data = userDB.find(task => task.id == id)
    return data
}

const createUser = (first_name) => {
    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    userDB.push(newUser)
    return newUser
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}