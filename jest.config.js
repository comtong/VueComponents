module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: ["packages/**/*.{js, vue}", "!**/node_modules/**", "!**/examples/**"],
  coverageReporters: ["html"]
};
