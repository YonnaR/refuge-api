import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import Reservation from '../../models/RestauModel/RestauReservation';

const all: RequestHandler = async (req, res) => {
  const reserv = await Reservation.find();
  res.send({ reserv });
};

export default handleErrorMiddleware(all);