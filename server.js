require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const flash = require('connect-flash')
const session = require('express-session')
const SECRET_SESSION = process.env.SECRET_SESSION;
const passport = require('./config/ppConfig')
const isLoggedIn = require('./middleware/isLoggedIn')
const db = require('./models')
const methodOverride = require('method-override');
// const { default: axios } = require('axios');
const axios = require('axios')
const API_KEY = process.env.API_KEY


app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);
app.use(session ({
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use((req, res, next) =>{
  console.log(res.locals)
  res.locals.alerts = req.flash()
  res.locals.currentUser = req.user;
  next()
})

/* ------ ROUTES ------ */

app.get('/', async (req, res) => {
    try {
      const reviews = await db.review.findAll()
      const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${API_KEY}`)
      const fictionData = response.data.results.lists[0].books // list of Fiction best sellers
      const nonfictionData = response.data.results.lists[1].books // Non fiction list best sellers
      const pictureBookData = response.data.results.lists[8].books // Childrens Book list best sellers
      const childrensSeriesData = response.data.results.lists[9].books
      const bestSellersDate = response.data.results.bestsellers_date
      /* const book1Object = data[0]
      const book2Object = data[1]
      const book3Object = data[2]
      const book4Object = data[3] */
      
      
      
      res.render('index', {reviews,bestSellersDate,fictionData,nonfictionData,pictureBookData,childrensSeriesData})
    } catch (err) {
      console.log(err)
    }
});


app.get('/profile', isLoggedIn, (req, res) => {
  const {id, name, email} = req.user.get()
  console.log(req.user)
  res.render('profile', {id, name, email});
});


app.use('/auth', require('./controllers/auth'));
app.use('/book', require('./controllers/book'))

/* OOPS! 404 Page */
app.get('/*', (req,res) =>{
  res.send(`<p>You have reached a page that does not exist</p>
  <a href="/" alt="Go to main page">Back to Good Boox main page</a>
  <h1 style="font-size:7rem;">404</h1>
  `)
})

/* ### PORT LISTENER ### */
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
