const db = require('./models')


/* Delete an entry */
async function deleteReview(){
// look for review based on ID for testing
   const reviewToEdit = await db.review.destroy({
       where:{id:8}
   })
   console.log(reviewToEdit)
}
// deleteReview()

async function commentDelete(){
    const theComment = await db.comment.destroy({
        where:{id:3}
    })
    console.log(theComment)
}


commentDelete()