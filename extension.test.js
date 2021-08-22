const rewire = require("rewire")
const extension = rewire("./extension")
const getCurrentFile = extension.__get__("getCurrentFile")
// @ponicode
describe("getCurrentFile", () => {
    test("0", () => {
        let callFunction = () => {
            getCurrentFile()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("extension.deactivate", () => {
    test("0", () => {
        let callFunction = () => {
            extension.deactivate()
        }
    
        expect(callFunction).not.toThrow()
    })
})
