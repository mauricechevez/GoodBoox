const db = require('./models')

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
      title:"Without Remorse",
      content:`"This book is good for three reasons. One, it's not a Jack Ryan story. It tells us how John Clark came into being, who he is and what he is, and the plot actually happens roughly 15-20 years before the main series. Two, Vietnam, so it's low tech and gritty Ramboism. Three, Tom Clancy normally wrote Puritan Republican-voting cardboard emotions for his characters with the full knowledge that they would be portrayed in the cinema, so it must look good. But here, he went the distance with John and actually gave him something of a semblance of a real personality, and it's one of his more engaging works. All combined, it's a very decent, classic thriller, and you will like for a bunch of reasons, especially since John is sort of an anti-hero, and there are several unique, old era elements in the book, which make for a very refreshing departure from Tom's highly dense and detailed military flavored writing."`,
      book_price:10,
      img_url:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1310082706l/19668.jpg",
      category:"Action"
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
findReview()





