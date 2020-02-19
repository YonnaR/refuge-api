import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';

const discard :RequestHandler = async (req, res) =>{
    res.send()
}

export default handleErrorMiddleware(discard)