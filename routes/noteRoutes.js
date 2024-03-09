import express from 'express'
import { createNote, deleteNote, getNotes, updateNote } from '../controllers/noteController.js'
import { auth } from '../middleware/auth.js'
import { upload } from '../controllers/userController.js'

const noteRouter=express.Router()


noteRouter.get("/",auth,getNotes)
noteRouter.post("/add",auth,upload.single('image'),createNote)
noteRouter.put("/update/:id",auth,upload.single('image'),updateNote)
noteRouter.delete("/:id",auth,deleteNote)

noteRouter.post("signin",(req,res)=>{
res.send("note post request")
})


export default noteRouter