import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [
      {
        id: "1",
        image: "harry-potter-and-philosophers-stone.jpeg",
        title: "Harry Potter and The Philosopher's Stone",
        favorites: false,
        author: "J. K. Rowling",
        description:
          "Harry Potter is a series of novels written by British writer J. K. Rowling. The books chronicle the adventures of the young wizard Harry Potter, as well as his friends Ron Weasley and Hermione Granger, studying at Hogwarts School of Witchcraft and Wizardry.",
        price: 30,
        category: "fantasy",
      },
      {
        id: "2",
        image: "harry-potter-and-the-chamber-of-secrets.jpeg",
        title: "Harry Potter And The Chamber of secrets",
        favorites: false,
        author: "J. K. Rowling",
        description:
          "Harry Potter and the Chamber of Secrets is the second novel in the series of books about the young wizard Harry Potter, written by J. K. Rowling.",
        price: 30,
        category: "fantasy",
      },
      {
        id: "3",
        image: "harry-potter-and-the-prisoner-of-azkaban.jpeg",
        title: "Harry Potter and The prisoner of Azkaban",
        favorites: false,
        author: "J. K. Rowling",
        description:
          "Harry Potter and the Prisoner of Azkaban is the third book in the Harry Potter series by JK Rowling.",
        price: 30,
        category: "fantasy",
      },
      {
        id: "4",
        image: "harry-potter-and-the-goblet-of-fire.jpeg",
        title: "Harry Potter and the Goblet of Fire",
        favorites: false,
        author: "J. K. Rowling",
        description:
          "Harry Potter and the Goblet of Fire is the fourth book about the adventures of Harry Potter, written by the English writer JK Rowling. Published in England in 2000.",
        price: 30,
        category: "fantasy",
      },
      {
        id: "5",
        image: "harry-potter-and-the-order-of-the-phoenix.jpeg",
        title: "Harry Potter and the Order of the Phoenix",
        favorites: false,
        author: "J. K. Rowling",
        description:
          "Harry Potter and the Order of the Phoenix is the fifth book about Harry Potter by the English writer J. K. Rowling. The world premiere of the book took place in England in the summer of 2003, and the Russian premiere in early 2004. Five million copies were sold in the first 24 hours form the start of sales. Is the longest book in the series.",
        price: 30,
        category: "fantasy",
      },
      {
        id: "6",
        image: "game-of-thrones.jpeg",
        title: "Game of Thrones",
        favorites: false,
        author: "George R.R. Martin",
        description:
          "Game of Thrones is a fantasy novel by American writer George R. R. Martin, the first book in the A Song of Ice and Fire series. The work was first published in 1996 by Bantam Spectra. The novel takes place in a fictional universe.",
        price: 30,
        category: "adventure",
      },
      {
        id: "7",
        image: "clash-of-kings.jpg",
        title: "Clash of Kings",
        favorites: false,
        author: "George R.R. Martin",
        description:
          "A Clash of Kings is an epic fantasy novel by American writer George R. R. Martin, the second part of the “A Song of Ice and Fire” saga. The novel was first published in the United States on November 16, 1998.",
        price: 30,
        category: "adventure",
      },
      {
        id: "8",
        image: "storm-of-swords.jpg",
        title: "Storm of Swords book",
        favorites: false,
        author: "George R.R. Martin",
        description:
          "A Storm of Swords is an epic fantasy novel by American writer George R. R. Martin, the third part of the “A Song of Ice and Fire” saga. The novel was first published in the UK on August 8, 2000.",
        price: 30,
        category: "adventure",
      },
      {
        id: "9",
        image: "feast-of-vultures.jpg",
        title: "Feast of Vultures",
        favorites: false,
        author: "George R.R. Martin",
        description:
          "A Feast for Vultures is an epic fantasy novel by American writer George R. R. Martin, the fourth installment in the A Song of Ice and Fire saga. Genre: epic fantasy with horror elements. The novel was first published on October 17, 2005 in the United Kingdom, and on November 8, 2005 in the United States.",
        price: 30,
        category: "adventure",
      },
      {
        id: "10",
        image: "a-dance-with-dragons.jpeg",
        title: "A Dance with Dragons",
        favorites: false,
        author: "George R.R. Martin",
        description:
          "A Dance with Dragons is an epic fantasy novel by American writer George R. R. Martin, the fifth installment in the A Song of Ice and Fire saga. Initially, when the author conceived the series as a trilogy, the title “A Dance with Dragons” referred to the planned second book in the series, after “Game of Thrones.”",
        price: 30,
        category: "adventure",
      },
    ],
    cart: [],
    isCart: false,
  },
  reducers: {
    toggleBookFavorite(state, action) {
      const book = state.books.find((book) => book.id === action.payload.id);

      book.favorites = !book.favorites;
    },
    addBookToCart(state, action) {
      const book = state.cart.find((book) => book.id === action.payload.id);

      if (!book) {
        const book = state.books.find((book) => book.id === action.payload.id);

        state.cart = [...state.cart, { ...book, count: action.payload.count }];
      } else {
        book.count = book.count + action.payload.count;
      }
    },
    decrementCountBookCart(state, action) {
      const book = state.cart.find((book) => book.id === action.payload.id);

      book.count = book.count - 1;
    },
    incrementCountBookCart(state, action) {
      const book = state.cart.find((book) => book.id === action.payload.id);

      book.count = book.count + 1;
    },
    deleteBookCart(state, action) {
      state.cart = state.cart.filter((book) => {
        return book.id !== action.payload.id;
      });
    },
    setCart(state) {
      state.isCart = !state.isCart;
    },
  },
});

export const {
  toggleBookFavorite,
  addBookToCart,
  decrementCountBookCart,
  incrementCountBookCart,
  deleteBookCart,
  setCart,
} = bookSlice.actions;

export default bookSlice.reducer;
