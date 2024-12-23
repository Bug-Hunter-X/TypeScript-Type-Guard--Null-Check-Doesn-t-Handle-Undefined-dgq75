function greet(name: string | null | undefined): string {
  if (name === null || name === undefined) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("John")); // Output: Hello, John!
console.log(greet(undefined)); // Output: Hello, world!