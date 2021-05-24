# GoodBoox
GoodBoox is a multi author Book Review site/blog, inspired by [Goodreads](https://www.goodreads.com/).

# Project Purpose
This project was meant to demonstrate the use of full stack technlogies, including:
* Node
* Express JS
* Postgres (For database)
* Sequelize (For ORM to Postgres)
* Axios (For API Calls)
* Bootstrap (For easier styling management)
* Passport (for Authentication)
* HTML
* CSS
* Javascript

## Usage
**Without Account**
Visitors can view any review and comment on them without creating an account.

**With Account**
Registered visitors can create their own reviews, and edit and delete any review.

## Links Table
| Page | Description |
| ----------- | ----------- |
| [goodbox main page](https://good-boox.herokuapp.com/) | Homepage with a list of reviews, and the latest NYT Best Sellers in multiple categories |
| [Signup Page](https://good-boox.herokuapp.com/auth/signup) | Sign up for access to more features on the site |
| [Login Page](https://good-boox.herokuapp.com/auth/login) | Login to access your own account |


# Screenshots of pages
### **Index Page - Reviews**
![Screenshot of Index - list of reviews](./img/screenshots/index-reviews1.png)

### **Index Page - NYT Api Results**
![Screenshot of Index - list of API Results](./img/screenshots/index-api1.png)

### **Edit or Delete reviews as a logged in user**
![Screenshot of the Edit and Delete reviews page](./img/screenshots/edit-delete-reviews.png)

### **Editing a specific review as a logged in user**
![Screenshot of editing a specific review](./img/screenshots/edit-specific-review.png)


# How it works (Code)
``` 
// Write some code!
```

# Future Considerations
The site sort of a "wild wild west" right now, which with time, can become chaotic. Here are a couple of challenges I'd like to fix:
1. Any registered member can edit and delete someone else's reviews.
    * Find a way to only show that register user's reviews using table associations.
2. Add an anti-spam module for the comments section.
    * I have done this in the past, but with Wordpress, which involved a plugin. I must find a way to at least prevent bots from comments in the same manner.
3. Limit amount of reviews that show up on the main page.
    * I believe using a limit in my query would fix this. Figuring out the logic on how to display a "Next Page" with X amount of reviews shouldn't be too difficult.
4. Add categories to the page
    * I already have the categories in the database. Displaying them in a meaninful way is what I need to do.
5. Associating a book review with multiple categories
    * A book can belong to many categories/genres. For simplicities sake, I left it at 1 category for now.

# Credits
## Helpful Links
*Stack Overflow:* 
Helped me solve the issue retrieving data back from the DB using EJS. Applied same logic from PHP and it worked.
[selected value get from db into dropdown select box option using php mysql error](https://stackoverflow.com/questions/18733545/selected-value-get-from-db-into-dropdown-select-box-option-using-php-mysql-error/39070055)

## API Used
I used the [New York Times API](https://developer.nytimes.com/) to get the latest "Best Sellers" for books in multiple categories. Thankfully, the data was not as nested or difficult to retrieve what I was looking for.

## People ##
I wouldn't have been able to complete this project without the help of my instructor and members of my "pod" during the project week for this assignment at General Assembly. Seeing how I wasn't the only one struggling with these concepts was in itself a motivator. We were all in the same boat, yet found our way to shore by combining skills and knowledge. (Ask for permission to write names). 