const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("initialization", () => {
        it("github account via constructor", () => {
            const obj = new Engineer('','','',"mtchrrs");

            expect(obj.github).toEqual("mtchrrs");
        });
    });
    describe("getRole", () => {
        it("getRole() should return Engineer", () => {
            const obj = new Engineer();

            expect(obj.getRole()).toEqual("Engineer");
        });
    });
    describe("getGithub", () => {
        it("can get githubh username via getGithub()", () => {
            const github = "mtchrrs";
            const obj = new Engineer('','','',github);

            expect(obj.getGithub()).toEqual(github)
        }); 
    });
})