const Intern = require('../lib/Intern.js');

test("Get school via constructor", () => {
  const testValue = "MIT";
  const e = new Intern("Diego", 1, "dieres2010@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});
test("getRole() return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Diego", 1, "dieres2010@gmail.com", "MIT");
  expect(e.getRole()).toBe(testValue);
});
test("Get school via getSchool()", () => {
  const testValue = "MIT";
  const e = new Intern("Diego", 1, "dieres2010@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});