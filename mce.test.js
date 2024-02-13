"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// extend imports as needed
var sicp_1 = require("sicp");
var mce_1 = require("../src/mce");
var empty_env = (0, mce_1.setup_environment)();
var comp = (0, mce_1.tagged_list_to_record)(["literal", [20, null]]);
test("Tests evaluation of a lambda expression", function () {
    (0, mce_1.evaluate)((0, sicp_1.parse)("(x => x * x)(2);"), empty_env);
    expect((0, mce_1.evaluate)((0, sicp_1.parse)("(x => x * x)(2);"), empty_env)).toBe(4);
});
test("A literal of 20 is a literal of 20", function () {
    expect((0, mce_1.evaluate)(comp, empty_env)).toEqual(20);
});
