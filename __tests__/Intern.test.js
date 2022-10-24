const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("initialization", () => {
        it("get school via constructor", () => {
            const school = "UWA";
            const obj = new Intern('','','',school);

            expect(obj.school).toEqual(school);
        });
    });
    describe("getRole", () => {
        it("getRole() should return 'Intern'", () => {
            const obj = new Intern('','','','');

            expect(obj.getRole()).toEqual("Intern");
        });
    });
    describe("getSchool", () => {
        it("can get school via getSchool()", () => {
            const school = "UWA";
            const obj = new Intern('','','',school);

            expect(obj.getSchool()).toEqual(school);
        });
    });
})