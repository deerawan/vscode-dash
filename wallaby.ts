module.exports = function(w) {
  return {
    files: ['src/**/*.ts'],

    tests: ['test/**/*.test.ts'],

    env: {
      type: 'node',
    },

    testFramework: 'mocha',
    setup: function(wallaby) {
      const mocha = wallaby.testFramework;
      mocha.ui('tdd');
      // etc.
    },
  };
};
