/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * Retrieves all comments from the database.
 * 
 * @route GET /
 * @returns {Object[]} Array of comment objects
 * @returns {number} 500 - If there's an error fetching comments
 * @throws {Error} Returns 500 status with error message if fetch fails
 */

/**
 * Deletes a comment by its ID.
 * 
 * @route DELETE /:id
 * @param {string} id - The comment ID from the URL parameter
 * @returns {Object} message - Success message indicating comment was deleted
 * @returns {number} 404 - If the comment with the given ID is not found
 * @returns {number} 500 - If there's an error during deletion
 * @throws {Error} Returns 404 status if comment not found
 * @throws {Error} Returns 500 status with error message if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;


router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

//add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});