const express=require('express')
const router=express.Router()
const empconfigcontroller=require('../controller/empcontroller')

// router.use('/employee',empconfigcontroller)
// router.use('/employee'.empconfigcontroller)
// router.use('/employee'.empconfigcontroller)
// router.use('/employee'.empconfigcontroller)

 router.get('/employee',empconfigcontroller.dispemployee)
 router.post('/employee',empconfigcontroller.insertemployee)
 router.put('/employee/:employeeName',empconfigcontroller.updateemployee)
 router.delete('/employee/:employeeName',empconfigcontroller.deleteemployee)

module.exports=router;
