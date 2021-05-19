const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models')


/* ---- Routes ---- */


// NEW REVIEW (VIEW FORM)
router.get('/new', (req,res)=>{
    res.render('reviews/new.ejs')
  })
  
// NEW REVIEW (Create/POST)
router.post('/new', (req,res) =>{
  const userModel = db.user
  console.log(userModel)
  .then(returnedModel =>{
    db.review.create({
      title:req.body.book-title,
      content:req.body.content,
      book_rating:req.body.book-rating,
      book_price:req.body.book-price,
      img_url:req.body.img-url,
      category:req.body.category,
      name:req.body.name
    })
  })
    .then(newReview =>{
      res.redirect('/')
    })
})

router.get('/review/:id', (req, res) =>{
    const bookId = req.params.id
    // const authorName
    db.review.findOne({
      where:{id:bookId},
      include:[db.user]
    }).then(bookFound =>{
      console.log(bookFound.user.name)
      res.render('reviews/index.ejs', {bookFound})
    })
   
    // res.render('/reviews/index.ejs',)
  })



module.exports = router;