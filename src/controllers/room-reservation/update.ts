import RoomReservation from './../../models/RoomModel/RoomReservation';
import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import Reservation from '../../models/RoomModel/RoomReservation';

const update: RequestHandler = async (req , res) =>{
    const id = req.params.id;
    const utc = new Date().toUTCString();
    const { firstName, lastName, startDate, endDate, mail, tel, adults, childrens,message, created } = req.body;
    const reserv = new Reservation({
        _id:id,
        firstName,
        lastName, 
        startDate, 
        endDate, 
        mail, 
        tel, 
        adults, 
        childrens, 
        message, 
        created, 
        updated:utc 
    });
    RoomReservation.findByIdAndUpdate(id, reserv, (err, item)=>{
        if(err) res.status(400).send({
            info:'error',
            message:err
        });
        else res.send({
            info:'success',
            reservation: item
        });
    });
};

export default handleErrorMiddleware(update);