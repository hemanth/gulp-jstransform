'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var jstransform = require('./index');

it('should convert ES6 to ES5', function (cb) {
        var stream = jstransform("var empty = () => {};");

        stream.on('data', function (file) {
                assert.equal(file.relative, 'fixture.js');
                assert.equal(file.contents.toString(), 'var empty = function()  {};');
                cb();
        });

        stream.write(new gutil.File({
                path: 'fixture.js',
                contents: new Buffer("var empty = () => {};")
        }));
});

it('should convert object concise methods', function (cb) {

        var stream = jstransform("var obj = { method() {} };");

        stream.on('data', function (file) {
                assert.equal(file.relative, 'fixture.js');
                assert.equal(file.contents.toString(), 'var obj = { method:function() {} };');
                cb();
        });

        stream.write(new gutil.File({
                path: 'fixture.js',
                contents: new Buffer("var obj = { method() {} };")
        }));
});
