# Some useful stuffs for me
```
sequelize model:create --name review --attributes title:text,content:text,userId:integer,book_rating:integer,book_price:integer,img_url:text,category:text --force
```


```sequelize model:create --name review --attributes title:text,author:text,content:text,userId:integer,book_rating:integer,book_price:integer,img_url:text,category:text --force
// Associations For Review model
static associate(models) {
      // define association here
      models.review.hasMany(models.comment)
      models.review.belongsTo(models.user)
//Book Rating validation
book_rating: {
      type: DataTypes.INTEGER,
      validate:{
        min:0,
        max:5
      }
    },
```

### Creating an edit page..
1. What do I need? 
  * A form
    * **DONE**
  * Have that form return back the current values of **that** review baed on the ID parameter.
    * **DONE**
  * use the PUT method to return that data back into the database.
     * **DONE**


### Extra info for NYT Story
```
<div class="nyt-content__box">
            <ul>
            <li style="font-weight: 500;"><%= book1Title %> </li>
            <li>by <%= book1Author %> </li>
            <li style="font-size: .8rem;"><%= book1Description %> </li>
            <li ><img src="<%= book1image %>" alt="<%= book1Title %>" class="nyt-book--image"></li>
            </ul>
```