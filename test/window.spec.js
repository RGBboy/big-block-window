/*!
 * Window unit tests
 */

/**
 * Module Dependencies
 */

var test = require('tape'),
    Window = require('../index');

/**
 * Setup
 */

var setup = function (t) {
};

/**
 * Teardown
 */

var teardown = function (t) {
};

/**
 * Window Class
 */

test('Window should be a class', function (t) {
    t.plan(1);
    t.ok(Window, 'class should exist');
});

/**
 * Window instance
 */

test('window should equal global.window', function (t) {
    t.plan(1);
    windowInstance = Window();
    t.equal(windowInstance, global.window);
});