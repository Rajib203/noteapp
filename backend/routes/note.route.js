import express from 'express'
import { createNote, deleteNote, getNotes, updateNote } from '../controller/note.controller.js' // 👈 added .js

const router = express.Router()

router.post("/create-note", createNote)
router.get("/get-notes",getNotes)
router.put("/update-note/:id",updateNote)
router.delete("/delete-note/:id",deleteNote)

export default router
