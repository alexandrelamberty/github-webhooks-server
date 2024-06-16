const assert = require("assert");
const sinon = require("sinon");
const { processPayload } = require("../src/process-payload");

describe("Process Payload", function () {
  it("should log the payload", function () {
    const payload = { example: "data" };
    const logSpy = sinon.spy(console, "log");

    processPayload(payload);

    assert(logSpy.calledWithMatch(`Payload processing`, payload));
    logSpy.restore();
  });

  // Additional tests can be written here for different payloads
});
