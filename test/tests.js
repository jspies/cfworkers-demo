
const glob = require("glob");
 
(async () => {
  const matches = glob.sync("**/*_test.mjs");
  for (const match of matches) {
    await import(`../${match}`)
  }
  run();
})()