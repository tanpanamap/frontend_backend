import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import expressLayout from 'express-ejs-layouts'
import employeeRoute from './routes/employeeRoute.js' 
import indexRoute from './routes/indexRoute.js' 
import { dirname } from 'path'

const app = express()
const port = 3000;


app.set('view engine' , 'ejs')

app.use(cors())
app.use(express.json())
app.use(expressLayout)
app.use(employeeRoute)
app.use(indexRoute)
app.use(express.static('public/img'))

const main = async (req,res) => {
    await mongoose.connect('mongodb+srv://adiaz:nogova123@cluster0.gume9tn.mongodb.net/company?retryWrites=true&w=majority')
}

main().catch(error => console.log(error))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})