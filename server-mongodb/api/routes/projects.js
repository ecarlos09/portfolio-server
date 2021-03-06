const express = require('express');
const router = express.Router();

const projectControllers = require('../controllers/projects');

// Projects index route
router.get('/', projectControllers.getProjects);

module.exports = router;

// // dogs show route
// router.get('/:id', async (req, res) => {
//     try {
//         const dog = await Dog.findById(req.params.id)
//         res.json(dog)
//     } catch(err) {
//         res.status(404).json({err})
//     }
// })

// // Create dog route
// router.post('/', async (req, res) => {
//     try {
//         const dog = await Dog.create(req.body.name, req.body.age)
//         res.json(dog)
//     } catch(err) {
//         res.status(404).json({err})
//     }
// })

// // dogs update route
// router.patch('/:id', async (req, res) => {
//     try {
//         const dog = await Dog.findById(req.params.id)
//         const updatedDog = await dog.update()
//         res.json({dog: updatedDog})
//     } catch(err) {
//         res.status(500).json({err})
//     }
// })

// // delete dog route
// router.delete('/:id', async (req, res) => {
//     try {
//         const dog = await Dog.findById(req.params.id)
//         await dog.destroy()
//         res.status(204).json('Dog deleted')
//     } catch(err) {
//         res.status(500).json({err})
//     }
// })