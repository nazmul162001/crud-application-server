import express from 'express'
import User from '../models/userSchema.js'
const routes = express.Router()

// inserted student data to the server
routes.post('/', async (req, res) => {
  try {
    const newStudent = await User(req.body)
    await newStudent.save()
    res.send(newStudent)
  } catch (error) {
    res.send({ error: error.message })
  }
})

// api for getting all students data
routes.get('/', async (req, res) => {
  try {
    const studentData = await User.find()
    res.send(studentData)
  } catch (error) {
    res.send({ error: error.message })
  }
})

// api for delete student data
routes.delete('/:id', async (req, res) => {
  try {
    const deleteStudentData = await User.findByIdAndDelete(req.params.id)
    res.send(deleteStudentData)
  } catch (error) {
    res.send({ error: error.message})
  }
})

// api for update student data
routes.put('/:id', async (req, res) => {
    try {
        const updateStudentData = await User.findByIdAndUpdate(req.params.id, {$set: req.body}) 
        res.send(updateStudentData)
    } catch (error) {
        res.send({ error: error.message })
    }
})

export default routes
