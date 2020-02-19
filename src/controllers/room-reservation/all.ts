import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import Reservation from '../../models/RoomReservation';

const all: RequestHandler = async (req, res) => {
  let limit :number = parseInt(req.query.limit) || 0;
  const reserv = await Reservation.find()
  .limit(limit)
  .sort("-created")
  res.send({ reserv });
};

export default handleErrorMiddleware(all);