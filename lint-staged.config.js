module.exports = {
  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx)': (filenames) => [
    'yarn tsc --noEmit',
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  './src/**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,

  // Format CSS
  './src/**/*.(css)': (filenames) => `yarn stylelint --fix ${filenames.join(' ')}`,
};
