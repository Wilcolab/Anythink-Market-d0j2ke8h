function toKebabCase(input) {
    // Handle null, undefined, or non-string inputs
    if (input === null || input === undefined || typeof input !== 'string') {
        return '';
    }

    return input
        .trim() // Remove leading/trailing whitespace
        .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase -> camel-Case
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2') // APIResponse -> API-Response
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .toLowerCase(); // Convert to lowercase
}

// Test Cases
console.log(toKebabCase('a standard sentence')); // 'a-standard-sentence'
console.log(toKebabCase('camelCase')); // 'camel-case'
console.log(toKebabCase('PascalCase')); // 'pascal-case'
console.log(toKebabCase('JSONResponse')); // 'json-response'
console.log(toKebabCase('multiple__underscores')); // 'multiple-underscores'
console.log(toKebabCase('  leading and trailing  ')); // 'leading-and-trailing'
console.log(toKebabCase(null)); // ''
console.log(toKebabCase(123)); // ''