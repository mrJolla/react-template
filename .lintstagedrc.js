module.exports = {
  '*.ts?(x)': (files) => [
    'tsc -p tsconfig.json --noEmit',
    `eslint --fix ${files.join(' ')}`,
  ],
  '*.{ts?(x),md,json,yml}': (files) => `prettier --write ${files.join(' ')}`,
  '*.(css)': (files) => `stylelint --fix ${files.join(' ')}`,
};
