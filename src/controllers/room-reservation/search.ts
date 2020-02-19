import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import Book from '../../models/RoomReservation';

/**
 * Builds a mongoose query object to search books according to book name and author name.
 * @param name String containing the book name or part of the book's name
 * @param author String containing the author name or part of the author's name
 */
const buildBookSeachQuery = (name: string, author: string) => {
  const query: any = {};
  if (name) {
    query.name = new RegExp(`.*${name}.*`, 'i');
  }
  if (author) {
    query.author = new RegExp(`.*${author}.*`, 'i');
  }

  return query;
};

const get: RequestHandler = async (req, res) => {
  const { name, author } = req.query;

  const query = buildBookSeachQuery(name, author);
  const books = await Book.find(query);
  res.send({ books });
};

export default handleErrorMiddleware(get);