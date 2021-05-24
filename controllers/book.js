const express = require('express');
const router = express.Router();
// const passport = require('../config/ppConfig');
const db = require('../models')
const isLoggedIn = require('../middleware/isLoggedIn')
const methodOverride = require('method-override');
const { compareSync } = require('bcrypt');

// Middleware
// app.use(express.urlencoded({extended: false}))

/* ---- Routes ---- */



// NEW REVIEW (VIEW FORM)
router.get('/new', isLoggedIn,(req,res)=>{
  const {id, name} = req.user.get()
  console.log(`User name is ${name} and their ID is ${id}`)
    res.render('reviews/new.ejs')
  })
  
// NEW REVIEW (Create/POST)
router.post('/new', isLoggedIn, (req,res) =>{
  const {id, name} = req.user.get()

  db.user.findOne({
    where: {name: name},
    include:[db.review]
  }).then (userName =>{ db.review.create({
    title:req.body.title,
    content:req.body.content,
    book_rating:req.body.book_rating,
    book_price:req.body.book_price,
    img_url:req.body.img_url,
    category:req.body.category,
    author:req.body.author,
    userId: req.user.id
    })
    }).then(post =>{
      req.flash('success','Review Created Successfully!')
      res.redirect('/')
    })
})

// VIEW an individual review
/* router.get('/review/:id', (req, res) =>{
    const bookId = req.params.id
    // const authorName
    db.review.findOne({
      where:{id:bookId},
      include:[db.user,db.comment]
    }).then(bookFound =>{
      console.log(bookFound)
      res.render('reviews/index.ejs', {bookFound})
    })
    .catch(err =>{
      console.log('ERROR' , err)
    })
  }) */

  // VIEW (GET) a book review


// POST Comments
router.post('/review/:id', (req,res)=>{
  const currentReviewId = parseInt(req.params.id)
  db.review.findOne({where:{id:currentReviewId}})
  .then(reviewFound =>{
    db.comment.create({
      name:req.body.name,
      content:req.body.content,
      reviewId:currentReviewId
    })
  })
  .then(postedComment =>{
    console.log(postedComment)
    console.log(currentReviewId)
    req.flash('success','Thank you for your comment!')
    res.redirect(`/book/review/${currentReviewId}`)
  })
  .catch(err =>{
    console.log('###### COMMENT ERROR ######', err)
    req.flash('error','There was an error processing your comment')
    res.redirect('/')
  })
})

router.get('/review/:id', async (req,res)=>{
  const bookId = req.params.id
  console.log('Book id is ' , bookId)
  const bookFound = await db.review.findOne({
    where:{id:bookId},
    include:[db.comment,db.user]
  })
  // const commentFound = await db.comment.findAll()
  res.render('reviews/index',{bookFound})
})


  // EDIT Page index to see all books and edit links.
router.get('/edit', isLoggedIn, (req,res) =>{
  // res.send('Edit index page')
  db.review.findAll()
  .then(reviews =>{
    res.render('reviews/editpage', {reviews})
  })
})

 // DELETE a review
router.delete('/edit/:id', isLoggedIn, (req,res) =>{
  const iDx = req.params.id
  db.review.destroy({where: {id:iDx}})
  .then(deletedReview =>{
    console.log('!!! REVIEW DELETED !!!')
    req.flash('success','Review Deleted succesfully.')
    res.redirect('/')})
})
   

// EDIT (GET) an individual review
router.get('/edit/:id', isLoggedIn, (req,res) =>{
  const bookId = req.params.id
  // Look for this book based on the ID above
  db.review.findOne({
    where: {id:bookId},
    include:[db.user]
  }).then (bookFound =>{
    console.log(bookFound)
    res.render('reviews/editform.ejs', {bookFound})
  })
})

 // EDIT (POST/PUT) an individual review
 router.put('/edit/:id', isLoggedIn, (req,res) =>{
   // find the review
  //  const {id} = req.user.get()
   const bookId = req.params.id
   console.log(bookId)
    db.review.findOne({
      where:{id:bookId}
   }).then(reviewFound =>{
    console.log('parameter ID variable is !!!!!!!!!!!!! ', req.params.id)
    reviewFound.update({
      title:req.body.title,
      content:req.body.content,
      book_rating:req.body.book_rating,
      book_price:req.body.book_price,
      img_url:req.body.img_url,
      category:req.body.category,
      author:req.body.author
      // userId: req.user.id
     })
   }).then(edited =>{
     console.log(edited)
     res.redirect('/')
   }).catch(err =>{
     console.log('Found an error!!!!! ', err)
   })
 })

module.exports = router;