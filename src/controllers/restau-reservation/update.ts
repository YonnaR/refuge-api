import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import Reservation from '../../models/RestauModel/RestauReservation';

const update: RequestHandler = async (req , res) =>{
    const id = req.params.id;
    let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const { firstName, lastName, date, mail, tel, reservationHour, couverts,message, created} = req.body;
    const reserv = new Reservation({ 
        firstName,
        lastName, 
        date, 
        mail, 
        tel, 
        reservationHour, 
        couverts,
        message, 
        created, 
        updated:utc 
    });
    Reservation.findByIdAndUpdate(id, reserv, (err, item)=>{
        if(err) res.status(400).send({
            info:'error',
            message:err
        });
        else res.send({
            info:'success',
            reservation: item
        });
    });
}

export default handleErrorMiddleware(update);