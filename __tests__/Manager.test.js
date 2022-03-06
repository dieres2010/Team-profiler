const Manager = require("../lib/Manager.js");

test("Get office number via constructor", () => {
  const testValue = 5555555;
  const e = new Manager("Diego", 1, "dieres2010@gmail.com", testValue);
  expect(e.officeNbr).toBe(testValue);
});
test("getRole() return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Diego", 1, "dieres2010@gmail.com", 100);
  expect(e.getRole()).toBe(testValue);
});
test("Get office number via getOfficeNbr()", () => {
  const testValue = 5555555;
  const e = new Manager("Diego", 1, "dieres2010@gmail.com", testValue);
  expect(e.getOfficeNbr()).toBe(testValue);
});