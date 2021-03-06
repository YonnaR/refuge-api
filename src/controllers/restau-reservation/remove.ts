import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import RestauReservation from '../../models/RestauModel/RestauReservation';

const remove :RequestHandler = async (req, res) =>{
    const id = req.params.id;
    await RestauReservation.findByIdAndDelete(id , (err, item)=>{
        if(err){
            res.status(400).send({
                info: "error",
                message: err
            });
        }
        else res.send({
            info: "success",
            message: item 
        });
    });
}

export default handleErrorMiddleware(remove)