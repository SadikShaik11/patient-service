import {catchAsync} from '../utils/catchAsync.js'
import {patients} from '../models/patientModel.js'
import {ApiError}from '../utils/ApiError.js'
const patientInfo= catchAsync(async (req,res)=>{
try {
    const response = await patients.find({});
    response.length>0 ? response : []
    res.status(400).json({success:false,data:response})
} catch (error) {
    res.status(400).json({success:false,error})
}
})
const createPatentInfo = catchAsync(async(req,res)=>{
 const {patientName ,place,dateOfCall,patientProblem} =req.body
 try {
    new Date(dateOfCall)
 } catch (error) {
    throw new ApiError(500,' the date must be in format of DD/MM/YYYY')
 }
 const result = await patients.create({patientName ,place,dateOfCall:new Date(dateOfCall),patientProblem})
 result ? result : []
 res.status(200).json({result})
})
export {patientInfo,createPatentInfo}