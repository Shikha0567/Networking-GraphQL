export const typeDefs = `#graphQl

type Author{
  id:ID,
  name:String
  books:[Book]
}

type Book{
  id:ID,
  title:String,
  publishedYear:Int,
  author:Author
}

type Query{
  book:[Book],
  author:[Author]
}
`;
