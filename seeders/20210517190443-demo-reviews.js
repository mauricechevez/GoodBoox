'use strict';

const reviewData = [
  {
    //1st Book Review
    title: "Romeo and Juliet",
    content:`"This great book (drama of course) I read in a single night. Naturally, an English graduate seldom can remain away from Shakespeare and his realm. However, even as an individual, before I began my studies seriously, Shakespeare and some of his creations were on the list 'to be read'. Romeo and Juliet is a play, to be clear at the beginning. Yes, as critics (modern ones) claim, this is perhaps the most 'unlikely' play which does not synchronise with the reality as others by the same dramatist. Nevertheless, let's give the 'play' its due - it surely does create that sensation which Shakespeare wanted to. The ephemeral romance between the 'first sight lovers' and the enemies sworn to suck the blood out of their lives... everything went on perfectly to (at least) create the star of today's Hollywood - Leo!
    The book has its merits as well as the demerits. Shakespeare is the vacuum. You can keep your experiments going on... I would like to rather appreciate him for his creation this time. I enjoyed reading the play and truly did!"`,
    userId: 1,
    book_rating:5,
    book_price:4,
    img_url:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572098085l/18135._SY475_.jpg",
    category:'Drama',
    author:'William Shakespeare',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  { 
    //2nd Book Review
    title: "Dracula",
    content:"I was rather disappointed by this classic. It started out with promise, especially the Jonathan Harker bits. Then all the male characters descended into blubbering worshippers of the two female characters, and by the end of the novel, I was wishing Dracula could snack on all of them and be done with it. I kept having to put it aside and read chapters in between other books, but I managed to finish it at last",
    userId: 1,
    book_rating:2,
    book_price:4,
    img_url:"https://images-na.ssl-images-amazon.com/images/I/51o9pfnGkTL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    category:'Horror',
    author:"Bram Stoker",
    createdAt: new Date(),
    updatedAt: new Date()
  
  },
  {
    //3rd Book Review
    title:"Without Remorse",
    content:`"This book is good for three reasons. One, it's not a Jack Ryan story. It tells us how John Clark came into being, who he is and what he is, and the plot actually happens roughly 15-20 years before the main series. Two, Vietnam, so it's low tech and gritty Ramboism. Three, Tom Clancy normally wrote Puritan Republican-voting cardboard emotions for his characters with the full knowledge that they would be portrayed in the cinema, so it must look good. But here, he went the distance with John and actually gave him something of a semblance of a real personality, and it's one of his more engaging works. All combined, it's a very decent, classic thriller, and you will like for a bunch of reasons, especially since John is sort of an anti-hero, and there are several unique, old era elements in the book, which make for a very refreshing departure from Tom's highly dense and detailed military flavored writing."`,
    userId: 1,
    book_rating:5,
    book_price:10,
    img_url:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1310082706l/19668.jpg",
    category:"Action",
    author:"Tom Clancy",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title:"I Am Not Spock",
    content:`I am a fan of Star Trek, in particular the original series movies. I've also had occasion to listen to Mr. Nimoy speak twice, so I was looking forward to reading this infamously titled autobiography. I wasn't disappointed, and the 'voice' in the book matched up with my expectations for the most part. Not a heavy ready, it's a pretty slim book, but I enjoyed it quite a bit. I don't know that I'd recommend it to the rabid Trekkie, since it really isn't focused on the series. I'm about to start on 'I Am Spock' next, and I'm looking forward to seeing how Mr. Nimoy's writing developed from one book to the next.`,
    userId: 1,
    book_rating:4,
    book_price:10,
    img_url:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1331448368l/580882.jpg',
    category:'Biography',
    author:"Leonard Nimoy",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
      title: 'The Shining',
      content: 'The Shining is a ghost story told the way it should be. The characters are strong and endaring, all in their own right. I actually really like Jack Torrance. He has personality, plenty of flaws, and he’s just like every John Doe next door. Stephen King does an excellent job describing Jack’s descent into madness. Danny is another great character. He’s timid and shy and a small kid, but at the same time he’s the most powerful of all characters, with a gift that might be their only chance to escape.Suspenseful from the get-go, thrilling and terrifying, this is a great novel. I want to see the movie now, but hope that won’t be a dissapointment. This is my first full-length novel read by Stephen King, and I can’t wait to dive into another one of his works soon.',
      userId: 1,
      book_rating: 5,
      book_price: 5,
      img_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353277730l/11588.jpg',
      author: 'Stephen King',
      category: 'Thriller',
      createdAt: new Date(),
      updatedAt: new Date()
    
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('reviews', reviewData,{});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
