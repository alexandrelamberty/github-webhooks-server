const request = require("supertest");
const assert = require('assert');
const sinon = require("sinon");
const { app, server } = require("../src/server");

describe("GitHub Webhooks Server", function () {
  before(async function () {
    ({ expect } = await import("chai"));
  });

  after(function (done) {
    server.close(done);
  });

  it('should respond to GET / with "Github Webhooks Server"', function (done) {
    request(app)
      .get("/")
      .expect("Content-Type", /text/)
      .expect(200)
      .expect("Github Webhooks Server", done);
  });

  it("should handle POST /payload", function (done) {
    const payload = { example: "data" };

    request(app)
      .post("/payload")
      .send(payload)
      .set("Content-Type", "application/json")
      .expect(200, done);
  });

  it("should log payload on POST /payload", function (done) {
    const payload = { example: "data" };
    const logSpy = sinon.spy(console, "log");

    request(app)
      .post("/payload")
      .send(payload)
      .set("Content-Type", "application/json")
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        expect(logSpy.calledWithMatch(/Payload received/)).to.be.true;
        expect(logSpy.calledWithMatch(/Payload processing/)).to.be.true;
        logSpy.restore();
        done();
      });
  });
});

describe("Environment Variables", function () {
  it("should load environment variables from .env file", function () {
    require("dotenv").config();
    assert(process.env.PORT, "Expected environment variable to be set");
  });
});
