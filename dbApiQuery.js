require('dotenv').config();

const API_KEY = process.env.API_KEY

app.use(express.urlencoded({ extended: false }));

function getNYTBooks(){
    console.log(`My API is ${API_KEY}`)
    axios({
        method:'get',
        url:`"https://api.nytimes.com/svc/books/v3/reviews.json?author=Tom+Clancy&api-key=${API_KEY}"`
        // https://api.nytimes.com/svc/books/v3/lists.json
    })
    .then(response =>{
        console.log(response.data)
    })
    .catch(err =>{
        console.log(err)
    })
}

getNYTBooks()