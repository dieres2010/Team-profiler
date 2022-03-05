const Manager = require("../lib/Manager.js");

test("Create manager via constructor", () => {
  const manager = new Manager('Diego');

  expect(manager.name).toBe('Diego');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNbr).toEqual(expect.any(String));
});