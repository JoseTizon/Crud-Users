const { getAllUsers, getUserById, createUser } = require ('./users.controllers')

const getUsers = (req, res) => {
    const data = getAllUsers()
    res.status(200).json(data)
}

const getOneUser = (req, res) => {
    const id = req.params.id
    const data = getUserById(id)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({id: id, message: 'Invalid ID'})
    }
}

const createNewUser = (req, res) => {
    const { first_name } = req.body
    if(first_name){
        const data = createUser(first_name)
        res.status(201).json(data)
    } else {
        res.data(400).json({message: 'Missing data'})
    }
}

module.exports = {
    getUsers,
    getOneUser,
    createNewUser
}