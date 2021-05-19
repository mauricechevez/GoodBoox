const { urlencoded } = require('express');
const express = require('express');
const app = express()
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models')


// Middleware
app.use(express.urlencoded({extended: false}))


/* ---- Routes ---- */


// NEW REVIEW (VIEW FORM)
router.get('/new', (req,res)=>{
    res.render('reviews/new.ejs')
  })
  
// NEW REVIEW (Create/POST)
router.post('/new', (req,res) =>{
    db.review.create({
      title:req.body.title,
      content:req.body.content,
      book_rating:req.body.book_rating,
      book_price:req.body.book_price,
      img_url:req.body.img_url,
      category:req.body.category,
      author:req.body.author

    }).then(something =>{
      console.log(req.body)
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
  })

module.exports = router;