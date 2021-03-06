// this tests all points using $near
// @tags: [
//   sbe_incompatible,
// ]
var db;
(function() {
"use strict";
load("jstests/libs/geo_near_random.js");

const conn = MongoRunner.runMongod();
assert.neq(null, conn, "mongod failed to start.");
db = conn.getDB("test");

var test = new GeoNearRandomTest("weekly.geo_near_random1");

test.insertPts(1000);

test.testPt([0, 0]);
test.testPt(test.mkPt());
test.testPt(test.mkPt());
test.testPt(test.mkPt());
test.testPt(test.mkPt());

MongoRunner.stopMongod(conn);
})();
