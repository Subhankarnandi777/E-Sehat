import express from 'express';
import { cancelAppointment } from "../controllers/appointmentsController";


import { 
  bookAppointment, 
  getPatientAppointments, 
  getDoctorsBySpecialization,
  getSpecializations,
  getDoctorAppointments  // Add this import
} from '../controllers/appointmentsController';

const router = express.Router();

router.post('/', bookAppointment);
router.get('/patient/:patient_id', getPatientAppointments);
router.get('/doctor/:doctor_id', getDoctorAppointments);  // Add this line
router.get('/doctors/:specialization', getDoctorsBySpecialization);
router.put("/:id/cancel", cancelAppointment);


export default router;