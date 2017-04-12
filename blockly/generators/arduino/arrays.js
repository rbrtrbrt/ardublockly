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


Blockly.Arduino['array_get'] = function(block) {
  var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('ARRAY'),  // TODO: use correct namespace here
      Blockly.Variables.NAME_TYPE);
  var index = Blockly.Arduino.valueToCode(block, 'INDEX',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  code += '['+index+']'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['array_set'] = function(block) {
  var value = Blockly.Arduino.valueToCode(block, 'VALUE',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';  // TODO: use type's defaultValue
  var index = Blockly.Arduino.valueToCode(block, 'INDEX',
      Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
  var arrName = Blockly.Arduino.variableDB_.getName(   // TODO: use correct namespace here
      block.getFieldValue('ARRAY'), Blockly.Variables.NAME_TYPE);
  return arrName +'['+index+']' + ' = ' + value + ';\n';
};


Blockly.Arduino['array_global'] = Blockly.Arduino.noGeneratorCodeLine;
Blockly.Arduino['array_global_init'] = Blockly.Arduino.noGeneratorCodeLine;
Blockly.Arduino['array_local'] = Blockly.Arduino.noGeneratorCodeLine;
