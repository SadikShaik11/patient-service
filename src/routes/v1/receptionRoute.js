import express from 'express'
const router = express.Router()

import {patientInfo,createPatentInfo} from '../../controllers/patientController.js'
// to add patient info 
router.get('/patientsInfo',patientInfo)
// to get patient info
router.post('/patientsInfo',createPatentInfo)
 export default {
    router
}