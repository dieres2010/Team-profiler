const Engineer = require("../lib/Engineer.js");

test("Get GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Diego", 1, "dieres2010@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});
test("getRole() return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Diego", 1, "dieres2010@gmail.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});
test("Get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Diego", 1, "diere2010s@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});