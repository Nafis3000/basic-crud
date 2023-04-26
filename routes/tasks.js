const express = require('express')
const Task = require('../models/Task')
const router = express.Router()

// GET all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

// POST a new task
router.post('/', async (req, res) => {
    const newTask = new Task(req.body)
    await newTask.save()
    res.json(newTask)
})

// GET a task by id
router.get('/:id', async(req, res) => {
    const task = await Task.findById(req.params.id)
    res.json(task)
})

// UPDATE a task by id
router.put('/:id', async(req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.json(updatedTask)
})

// DELETE a task by id
router.delete('/:id', async(req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.json({ message: 'Task deleted' })
})

module.exports = router
