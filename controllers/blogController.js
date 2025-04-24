const Blog = require('../models/Blog');

// Create blog
exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({ ...req.body, author: req.user.id });
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ error: 'Could not create blog' });
  }
};

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().populate('author', 'email');
  res.json(blogs);
};

// Get single blog
exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('author', 'email');
  if (!blog) return res.status(404).json({ error: 'Blog not found' });
  res.json(blog);
};

// Update blog
exports.updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ error: 'Blog not found' });

  if (blog.author.toString() !== req.user.id)
    return res.status(403).json({ error: 'Unauthorized' });

  Object.assign(blog, req.body);
  await blog.save();
  res.json(blog);
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ error: 'Blog not found' });

  if (blog.author.toString() !== req.user.id)
    return res.status(403).json({ error: 'Unauthorized' });

  await blog.deleteOne();
  res.json({ message: 'Blog deleted' });
};
