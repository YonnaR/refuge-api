import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import Reservation from '../../models/RestauReservation';

const add: RequestHandler = async (req, res) => {
  let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  const { firstName, lastName, date, mail, tel, reservationHour, couverts,message} = req.body;
  const reserv = new Reservation({ 
    firstName,
    lastName, 
    date, 
    mail, 
    tel, 
    reservationHour, 
    couverts,
    message, 
    created:utc, 
    updated:utc 
  });
  await reserv.save((err , item)=>{
    if (err) res.status(400).send({
      info :"error",
      message: err
    }).end();
    else {
      res.send({
        info: 'Saved',
        reservation: item
      }).end();
    }
  });
};

export default handleErrorMiddleware(add);