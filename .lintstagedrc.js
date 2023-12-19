module.exports = {
  '*.ts?(x)': (files) => [
    'tsc -p tsconfig.json --noEmit',
    `eslint --fix ${files.join(' ')} --cache --cache-strategy content`,
  ],
  '*.{ts?(x),md,json,yml}': (files) =>
    `prettier --write ${files.join(' ')} --cache --cache-strategy metadata src`,
  '*.(css)': (files) =>
    `stylelint --aei --cache --cache-strategy content --fix ${files.join(' ')}`,
};
