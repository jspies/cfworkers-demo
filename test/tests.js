
const glob = require("glob");
 
require('../test/test_globals');

(async () => {
  const matches = glob.sync("**/*_test.mjs");
  for (const match of matches) {
    await import(`../${match}`)
  }
  run();
})()