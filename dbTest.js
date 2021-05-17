const db = require('./models')

const findAllUsers = () =>{
    db.user.findAll()
    .then(allFound =>{
        console.log(allFound)
    })
}
// findAllUsers()

// Create a user in the db

const createNewUser = () =>{
    db.user.create({
        name:"Maurice Chevez",
        password: "SEI412",
        email: "maurice@gmail.com"
    }).then(createdUser =>{
        console.log(createdUser)
    })
}
// createNewUser()

const findaUser = ()=>{
    db.user.findOne({
        where: {name:"Maurice Chevez"}
    })
    .then(found =>{
        console.log(found)
    })
}
findaUser()

