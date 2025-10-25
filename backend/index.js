import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import noteRoutes from './routes/note.route.js'
import cors from 'cors'
import path from 'path'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

// Database connection
try {
  mongoose.connect(process.env.MONGO_URL)
  console.log("Database connected successfully")
} catch (error) {
  console.log("Database connection failed:", error)
}

// Middleware
app.use(express.json())
app.use(cors())
app.use("/api/v1/noteapp", noteRoutes) // ✅ fixed path

const dirname = path.resolve()
app.use(express.static(path.join(__dirname,'/frontend/dist')))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
