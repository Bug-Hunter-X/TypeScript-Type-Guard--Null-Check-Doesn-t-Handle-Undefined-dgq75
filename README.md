# TypeScript Type Guard: Null Check Doesn't Handle Undefined

This repository demonstrates a common error in TypeScript type guards where a null check doesn't explicitly handle undefined values, leading to runtime errors.  The example function `greet` aims to handle strings and null values gracefully, but fails when provided `undefined`.

The solution demonstrates how to explicitly handle undefined to prevent the runtime error.

## Bug
The original code uses a simple null check which is insufficient.  The `undefined` value is not explicitly handled, causing a runtime error.

## Solution
The solution enhances the type guard to check for both null and undefined, ensuring a robust and error-free function.

## How to reproduce
Clone the repository, and run `tsc bug.ts` then `node bug.js`. You should see the error. Next, run `tsc bugSolution.ts` then `node bugSolution.js`. The bug will be resolved.