const Employee = require('../lib/Employee.js');

describe("Employee", () => {
    it("instantiate Employee", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
    it("Set name via constructor", () => {
        const name = "Diego";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
    it("Set id via constructor", () => {
        const testValue = 100;
        const e = new Employee("Diego", testValue);
        expect(e.id).toBe(testValue);
    });
    it("Get email via constructor", () => {
        const testValue = "dieres2010@gmail.com";
        const e = new Employee("Diego", 1, testValue);
        expect(e.email).toBe(testValue);
    });
    describe("getName", () => {
        it("Get name via getName()", () => {
            const testValue = "Diego";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
    describe("getId", () => {
        it("Get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Diego", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
    describe("getEmail", () => {
        it("Get email via getEmail()", () => {
            const testValue = "dieres2010@gmail.com";
            const e = new Employee("Diego", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
    describe("getRole", () => {
        it("getRole() return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Diego", 1, "dieres2010@gmail.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
});