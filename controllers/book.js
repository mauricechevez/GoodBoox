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
    res.render('/reviews/index',)
  })

module.exports = router;