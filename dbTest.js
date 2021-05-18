const db = require('./models')
const review = require('./models/review')

const findAllUsers = () =>{
    db.user.findAll()
    .then(allFound =>{
        console.log(allFound)
    })
}
// findAllUsers()


const findaUser = ()=>{
    db.user.findOne({
        where: {name:"Martin Lawrence"}
    })
    .then(found =>{
        console.log(found)
    })
}
// findaUser()

//Create Review and attach to a user
/* IS WORKING!!! */
const makeReview = () =>{
    db.user.findOne(
        {where:{name : "Maurice Chevez"}}
    )
    .then(foundUser =>{
        foundUser.createReview({
            //object filled with attributes of Review model
      title:"The Shining",
      content:`The Shining is a ghost story told the way it should be. The characters are strong and endaring, all in their own right. I actually really like Jack Torrance. He has personality, plenty of flaws, and he’s just like every John Doe next door. Stephen King does an excellent job describing Jack’s descent into madness. Danny is another great character. He’s timid and shy and a small kid, but at the same time he’s the most powerful of all characters, with a gift that might be their only chance to escape.Suspenseful from the get-go, thrilling and terrifying, this is a great novel. I want to see the movie now, but hope that won’t be a dissapointment. This is my first full-length novel read by Stephen King, and I can’t wait to dive into another one of his works soon.`,
      book_price:5,
      book_rating:5,
      img_url:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353277730l/11588.jpg",
      category:"Thriller"
        })
    })
    .then(newReview =>{
        console.log(newReview)
    })
}
// makeReview()

// find a review
const findReview = () => {
    db.review.findAll()
    .then(foundReview =>{
        console.log(foundReview)
    })
}
// findReview()

// Add user to existing review
const addUserToExistingReview = () =>{
    db.review.findOne({
        where: {id:2}
    })
    .then(foundReview =>{
        console.log(foundReview.get())
        db.user.findOne({
            where:{name : "Maurice Chevez"}
        })
    })
    .then(foundUser =>{
        console.log(foundUser)
        foundReview.addUser(foundUser)
    })
    .catch(err => console.log(`ERROR Found : ${err}`))
}
addUserToExistingReview()




