const data = {
  Books: [
    { id: 101, title: "JavaScript", publishedYear: "2022", authorId: 1 },
    { id: 102, title: "React", publishedYear: "2022", authorId: 1 },
    { id: 103, title: "DSA", publishedYear: "2024", authorId: 2 },
    { id: 104, title: "System Design", publishedYear: "2025", authorId: 2 },
    { id: 105, title: "Github", publishedYear: "2025", authorId: 3 },
  ],
  Authors: [
    { id: 1, name: "Shikha", bookId: [101, 102] },
    { id: 2, name: "Deepa", bookId: [103, 104] },
    { id: 3, name: "Abhinav", bookId: [105] },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, context, args, info) => {
      return data.Authors.find((author) => author.id == parent.authorId);
    },
  },
  Author: {
    books: (parent, context, args, info) => {
      return data.Books.filter((book) => parent.bookId.includes(book.id));
    },
  },
  Query: {
    book: () => {
      return data.Books;
    },
    author: () => {
      return data.Authors;
    },
  },
};
