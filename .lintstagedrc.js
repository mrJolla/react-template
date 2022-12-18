module.exports = {
  // Type check TypeScript files & lint then format TypeScript and JavaScript files
  '**/*.ts?(x)': (filenames) => ['tsc -p tsconfig.json --noEmit', `eslint --fix ${filenames.join(' ')}`],

  // Format MarkDown and JSON
  '**/*.{js?(x),ts?(x),md,html,css}': (filenames) => `prettier --write ${filenames.join(' ')}`,

  // Format CSS
  '**/*.(css)': (filenames) => `stylelint --fix ${filenames.join(' ')}`,
};
