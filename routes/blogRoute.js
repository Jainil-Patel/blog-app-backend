const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/authMiddleware');
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');

router.use(requireAuth); // Protect all routes

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
