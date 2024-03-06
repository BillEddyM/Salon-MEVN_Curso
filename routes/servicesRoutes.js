import express from 'express';
import { createService, getServices} from '../controllers/servicesController.js'


const router = express.Router(); 

// def ruta 
router.get('/', getServices )
router.post('/', createService )

export default router