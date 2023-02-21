import express from 'express'
const router = express.Router()

import {patientInfo} from '../../controllers/patientController.js'
router.get('/patientsInfo',patientInfo)
router.post('/patientsInfo',patientInfo)
 export default {
    router
}