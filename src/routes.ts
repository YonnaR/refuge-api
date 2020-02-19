import { Router } from 'express';

import * as RoomController from './controllers/room-reservation/index';
import * as RestauController from './controllers/restau-reservation/index';


const router = Router();

// room reservation routes
router.get('/reservation/gite/all', RoomController.all);
router.get('/reservation/gite/search', RoomController.search);
router.delete('/reservation/gite/:id', RoomController.remove);
router.put('/reservation/gite/:id', RoomController.update);
router.post('/reservation/gite', RoomController.add);


// restaurant reservation routes
router.post('/reservation/restau/new', RestauController.add);
router.get('/reservation/restau/all', RestauController.all);
router.get('/reservation/restau/search', RestauController.search);
router.delete('/reservation/restau/:id', RestauController.remove);
router.put('/reservation/restau/:id', RestauController.update);

export default router;
