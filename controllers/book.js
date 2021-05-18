const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models')


/* ---- Routes ---- */


// NEW REVIEW
router.get('/new', (req,res)=>{
    res.render('reviews/new.ejs')
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