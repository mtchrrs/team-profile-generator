const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("create a new employee object", () => {
            const obj = new Employee();

            expect(obj instanceof Employee);
        });
        it("set a name via constructor", () => {
            const name = "Employee 1";
            const obj = new Employee(name);

            expect(obj.name).toEqual(name,'','');
        });
        it("set an id via constructor", () => {
            const id = 1;
            const obj = new Employee('',id,'');

            expect(obj.id).toEqual(id);
        });
        it("set email via constructor", () => {
            const email = "employee@employme.com";
            const obj = new Employee('','',email);

            expect(obj.email).toEqual(email);
        });
    });
    describe("GetName", () => {
        it("get employee name via getName()", () => {
            const name = "Employee";
            const obj = new Employee(name,'','');

            expect(obj.getName()).toEqual(name);
        });
    });
    describe("GetID", () => {
        it("get the id via getID()", () => {
            const id = 1;
            const obj = new Employee('',1,'');

            expect(obj.getID()).toEqual(id);
        });
    });
    describe("getEmail", () => {
        it("get the email via getEmail()", () => {
            const email = "employee@employme.com";
            const obj = new Employee('','',email);

            expect(obj.getEmail()).toEqual(email);
        });
    });
    describe("getRole", () => {
        it("getRole() should return 'Employee'", () => {
            const obj = new Employee();

            expect(obj.getRole()).toEqual("Employee");
        })
    })
})