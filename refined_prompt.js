/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with various delimiters (spaces, hyphens, underscores)
 * and converts it to camelCase where the first word is lowercase and subsequent words
 * have their first letter capitalized.
 * 
 * @param {string} input - The input string to convert to camelCase
 * @returns {string|null} The camelCase converted string, or null if an error occurs
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * toCamelCase('camel case');        // Returns: "camelCase"
 * toCamelCase('camel-case');        // Returns: "camelCase"
 * toCamelCase('camel_case');        // Returns: "camelCase"
 * toCamelCase('CAMEL CASE');        // Returns: "camelCase"
 * toCamelCase('');                  // Returns: ""
 * toCamelCase(123);                 // Returns: null
 */

/**
 * Converts a string to dot.case format.
 * 
 * This function takes a string with various delimiters (spaces, hyphens, underscores)
 * and converts it to dot.case where words are separated by dots and all characters
 * are lowercase.
 * 
 * @param {string} input - The input string to convert to dot.case
 * @returns {string|null} The dot.case converted string, or null if an error occurs
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * toDotCase('dot case');            // Returns: "dot.case"
 * toDotCase('dot-case');            // Returns: "dot.case"
 * toDotCase('dot_case');            // Returns: "dot.case"
 * toDotCase('DOT CASE');            // Returns: "dot.case"
 * toDotCase('');                    // Returns: ""
 * toDotCase(123);                   // Returns: null
 */
function toCamelCase(input) {
    try {
        // Type check
        if (typeof input !== 'string') {
            throw new TypeError('Input must be a string');
        }

        // Handle empty string
        if (input.length === 0) {
            return '';
        }

        // Split by common delimiters (spaces, hyphens, underscores)
        const words = input
            .trim()
            .split(/[\s\-_]+/)
            .filter(word => word.length > 0);

        // Handle case where no valid words found
        if (words.length === 0) {
            return '';
        }

        // Convert to camelCase
        return words
            .map((word, index) => {
                const lowerWord = word.toLowerCase();
                // First word stays lowercase, rest are capitalized
                return index === 0
                    ? lowerWord
                    : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
            })
            .join('');
    } catch (error) {
        console.error('Error in toCamelCase:', error.message);
        return null;
    }
}

// Test cases
console.log(toCamelCase('camelcase'));           // "camelcase"
console.log(toCamelCase('camel case'));          // "camelCase"
console.log(toCamelCase('camel-case'));          // "camelCase"
console.log(toCamelCase('camel_case'));          // "camelCase"
console.log(toCamelCase('CAMEL CASE'));          // "camelCase"
console.log(toCamelCase(''));                    // ""
console.log(toCamelCase(123));                   // null (error handled)
console.log(toCamelCase(null));                  // null (error handled)
console.log(toCamelCase('  hello   world  ')); // "helloWorld"

function toDotCase(input) {
    try {
        // Type check
        if (typeof input !== 'string') {
            throw new TypeError('Input must be a string');
        }

        // Handle empty string
        if (input.length === 0) {
            return '';
        }

        // Split by common delimiters (spaces, hyphens, underscores)
        const words = input
            .trim()
            .split(/[\s\-_]+/)
            .filter(word => word.length > 0);

        // Handle case where no valid words found
        if (words.length === 0) {
            return '';
        }

        // Convert to dot.case
        return words
            .map(word => word.toLowerCase())
            .join('.');
    } catch (error) {
        console.error('Error in toDotCase:', error.message);
        return null;
    }
}

// Test cases
console.log(toDotCase('dotcase'));              // "dotcase"
console.log(toDotCase('dot case'));             // "dot.case"
console.log(toDotCase('dot-case'));             // "dot.case"
console.log(toDotCase('dot_case'));             // "dot.case"
console.log(toDotCase('DOT CASE'));             // "dot.case"
console.log(toDotCase(''));                     // ""
console.log(toDotCase(123));                    // null (error handled)
console.log(toDotCase(null));                   // null (error handled)
console.log(toDotCase('  hello   world  ')); // "hello.world"

