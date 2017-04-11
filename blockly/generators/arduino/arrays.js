/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Generating Arduino code for variables blocks.
 */
'use strict';

goog.provide('Blockly.Arduino.arrays');

goog.require('Blockly.Arduino');


console.log("----ARRAY GEN");

Blockly.Arduino['array_global'] = Blockly.Arduino.noGeneratorCodeLine;
Blockly.Arduino['array_local'] = Blockly.Arduino.noGeneratorCodeLine;
