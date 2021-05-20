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
      title:"The Shining 2",
      content:`The Shining is a ghost story told the way it should be. The characters are strong and endaring, all in their own right. I actually really like Jack Torrance. He has personality, plenty of flaws, and he’s just like every John Doe next door. Stephen King does an excellent job describing Jack’s descent into madness. Danny is another great character. He’s timid and shy and a small kid, but at the same time he’s the most powerful of all characters, with a gift that might be their only chance to escape.Suspenseful from the get-go, thrilling and terrifying, this is a great novel. I want to see the movie now, but hope that won’t be a dissapointment. This is my first full-length novel read by Stephen King, and I can’t wait to dive into another one of his works soon.`,
      book_price:1,
      book_rating:1,
      img_url:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353277730l/11588.jpg",
      category:"Thriller",
      author:'James Thorn'
        })
    })
    .then(newReview =>{
        console.log(newReview)
    })
}
// makeReview()

// Add existing user to Review
// First, search for the user
async function addUserToReview(){
    const targetUser = await db.user.findOne({
        where:{name:'Maurice Chevez'}
    })
    const targetDb = await db.review.create({
        title:''
    })
}   

// addUserToReview()


// find a review
const findReview = () => {
    db.review.findAll()
    .then(foundReview =>{
        console.log(foundReview)
    })
}
// findReview()

async function findReviewAddReviewer(){
// first, find the review

    try{
    const reviewFound = await db.review.findOne({where:{id:1}})
    const userFound = await db.user.findOne({where:{id:1}})
    console.log(`****** Updating userId of this review *******`)
    console.log(reviewFound.id, reviewFound.title, reviewFound.userId)
    console.log(userFound.name,userFound.id)
     const changedNullValue = await reviewFound.update({
        userId: userFound.id
    }, {where:{userId:null}}) 
    }
    catch(err){
        console.log(`$$$$$$ ERROR $$$$$$ `)
    }
}
// findReviewAddReviewer()

async function changeBookCover(){
    //first, find the review
    const reviewFound = await db.review.findOne({where:{title:"Dracula"}})
    const imageUrl = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1540464610l/6250997.jpg'
    console.log(`********************************************`)
    const changeImgUrl = await reviewFound.update({
        img_url:imageUrl}
    )
    console.log(changeImgUrl)
}
// changeBookCover()