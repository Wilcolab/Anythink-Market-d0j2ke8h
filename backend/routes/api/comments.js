/**
 * Comments API Router
 * 
 * Handles all comment-related operations including fetching, creating, and deleting comments.
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * GET /
 * Retrieves all comments from the database.
 * 
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object[]} Array of comment objects
 * @throws {Error} 500 - Failed to fetch comments
 */

/**
 * DELETE /:id
 * Deletes a comment by its ID.
 * 
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {string} req.params.id - The ID of the comment to delete
 * @param {Object} res - Express response object
 * @returns {Object} Success message confirming deletion
 * @throws {Error} 404 - Comment not found
 * @throws {Error} 500 - Failed to delete comment
 */

/**
 * POST /
 * Creates a new comment.
 * 
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {Object} req.body - The comment data to create
 * @param {Object} res - Express response object
 * @returns {Object} The created comment object with 201 status
 * @throws {Error} 400 - Failed to create comment
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

//add another endpoint for deleting a comment
router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete comment' });
  }
});
router.post('/', async (req, res) => {
    try {
        const comment = new Comment(req.body);
        const savedComment = await comment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create comment' });
    }
});

