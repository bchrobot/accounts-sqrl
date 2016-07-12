// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-sqrl.js.
import { name as packageName } from "meteor/bchrobot:accounts-sqrl";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-sqrl - example', function (test) {
  test.equal(packageName, "accounts-sqrl");
});
