const request = require("supertest")
const app = require("../server")

describe("test suite 1:", () => {
    test("test 1", async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
    })
})