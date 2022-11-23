import express from 'express'
import { getEmployee } from '../controllers/employeeControler.js'

const router = express.Router()

router.get('/profile',getEmployee)

export default router;
