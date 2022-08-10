const request = require("supertest");
const app = require("../src/server");

// Test main route GET: "/"
describe("Test my app server", () => {
  it("should get main route", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toEqual(200);
    expect(res.noContent).toEqual(false);
    expect(res.body).toHaveProperty("message");
    expect(res.text).toEqual('{"message":"Hello Wolrd!"}');
  });
});

// Testing route GET: "/users"
describe("Test my app server", () => {
  it("should get users route", async () => {
    const res = await request(app).get("/users");

    expect(res.statusCode).toEqual(200);
    expect(res.noContent).toEqual(false);
    expect(res.body).toHaveProperty("name");
  });
});
