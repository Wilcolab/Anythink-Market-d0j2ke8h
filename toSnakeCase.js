/**
 * Converts text to snake_case
 * @param {string} text - The text to convert
 * @returns {string} The text in snake_case format
 */
function toSnakeCase(text) {
  return text
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Handle camelCase
    .replace(/[\s\-]+/g, '_') // Replace spaces and hyphens with underscores
    .replace(/[^a-zA-Z0-9_]/g, '') // Remove special characters
    .toLowerCase(); // Convert to lowercase
}

module.exports = toSnakeCase;
