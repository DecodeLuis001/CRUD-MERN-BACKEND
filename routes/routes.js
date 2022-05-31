import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'
const router = express.Router()

//Se establecen las tuas para los metodos.
router.get('/', getAllBlogs)
router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

export default router