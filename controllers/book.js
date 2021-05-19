const { urlencoded } = require('express');
const express = require('express');
const app = express()
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models')
const isLoggedIn = require('../middleware/isLoggedIn')

// Middleware
app.use(express.urlencoded({extended: false}))


/* ---- Routes ---- */


// NEW REVIEW (VIEW FORM)
router.get('/new', isLoggedIn,(req,res)=>{
  const {id, name, email} = req.user.get()
  console.log(id)
    res.render('reviews/new.ejs')
  })
  
// NEW REVIEW (Create/POST)
router.post('/new', isLoggedIn, (req,res) =>{
  const {id, name, email} = req.user.get()
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
    author:req.body.author
    })
    }).then(post =>{
      db.review.
      res.redirect('/')
    })
})

// Each Review has its own page
router.get('/review/:id', (req, res) =>{
    const bookId = req.params.id
    // const authorName
    db.review.findOne({
      where:{id:bookId},
      include:[db.user]
    }).then(bookFound =>{
      console.log('Inside our REVIEW route !!!!!!')
      console.log(bookFound)
      res.render('reviews/index.ejs', {bookFound})
    })
    .catch(err =>{
      console.log('ERROR' , err)
    })
  })

module.exports = router;