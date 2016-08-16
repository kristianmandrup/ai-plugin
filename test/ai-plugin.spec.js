/*
 * ai-plugin
 * https://github.com/kristianmandrup/ai-plugin
 *
 * Copyright (c) 2016, Kristian Mandrup
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

var ai-plugin = require('../lib/ai-plugin.js');

describe('ai-plugin module', function() {
    describe('#awesome()', function() {
        it('should return a hello', function() {
            expect(ai-plugin.awesome('livia')).to.equal('hello livia');
        });
    });
});
