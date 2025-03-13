import { equal, ifError } from "node:assert/strict";
import { describe, it } from "node:test";
import { ping } from "./index.js";

describe("1. ping", () => {
  it("1.1 ping google.com", (_, done) => {
    ping("google.com", (err, info) => {
      ifError(err);
      equal(info.ip, "google.com");
      done();
    });
  });
});
