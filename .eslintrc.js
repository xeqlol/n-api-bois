module.exports = {
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'global-require': 0
  },
  env: {jest: true}
};
