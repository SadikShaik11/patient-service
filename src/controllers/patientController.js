import {catchAsync} from '../utils/catchAsync.js'

const patientInfo= catchAsync(async (req,res)=>{
try {
    const res = await 
} catch (error) {
    res.status(400).json({success:false,error})
}
})

export {patientInfo}