import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import Reservation, { IRoomReservation } from '../../models/RoomReservation';
import RoomMail from '../../mail/RoomMail';

const add: RequestHandler = async (req, res) => {
  const utc = new Date().toUTCString();
  const { firstName, lastName, startDate, endDate, mail, tel, adults, childrens,message} = req.body;
  const reserv = new Reservation({ 
    firstName,
    lastName, 
    startDate, 
    endDate, 
    mail, 
    tel, 
    adults, 
    childrens, 
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
      console.log(new RoomMail(reserv).send())
      res.send({
        info: 'Saved',
        reservation: item
      }).end();
    }
  });
};

export default handleErrorMiddleware(add);