import assert from "assert";
import handler from "../handler" // also an .mjs file
 
describe("handler", function() {
  it("runs this test", async function() {
    await handler();
    assert(true);
  })
})