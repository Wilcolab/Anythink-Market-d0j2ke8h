function toCamelCase(str) {
    return str
        .split(/[\s_-]+/)
        .map((word, index) => {
            if (index === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
console.log(toCamelCase('camelcase'));        // camelCase
console.log(toCamelCase('hello world'));      // helloWorld
console.log(toCamelCase('hello_world'));      // helloWorld
console.log(toCamelCase('hello-world'));      // helloWorld