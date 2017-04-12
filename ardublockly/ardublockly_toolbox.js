/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
'  <category id="catLogic" name="Logic" colour="210">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean"></block>' +
'    <block type="logic_null"></block>' +
'    <block type="logic_ternary"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category colour="120" id="catLoops" name="Loops">' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_whileUntil"></block>' +
'    <block type="controls_for">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="BY">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category colour="230" id="catMath" name="Math">' +
'    <block type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_single"></block>' +
'    <block type="math_trig"></block>' +
'    <block type="math_constant"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_change">' +
'      <value name="DELTA">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'    <block type="math_constrain">' +
'      <value name="LOW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="HIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_seed">' +
'      <value name="SEED">' +
'        <block type="io_analogread">' +
'          <field name="PIN">A5</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
// '    <block type="math_random_float"></block>' +
// '    <block type="base_map"></block>' +
'    <block type="full_map">' +
'      <value name="ORIGINMIN">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="ORIGINMAX">' +
'        <block type="math_number">' +
'          <field name="NUM">1023</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category colour="160" id="catText" name="Text">' +
'    <block type="text"></block>' +
'    <block type="text_join"></block>' +
'    <block type="text_append">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="text_length"></block>' +
'    <block type="text_isEmpty"></block>' +
//'    <!--block type="text_trim"></block Need to update block -->' +
//'    <!--block type="text_print"></block Part of the serial comms -->' +
'  </category>' +
'  <sep></sep>' +
'  <category colour="330" id="catVariables" name="Variables">' +
'    <block type="variables_global"></block>' +
'    <block type="variables_global_init"></block>' +
'    <block type="variables_get"></block>' +
'    <block type="math_change"></block>' +
'    <block type="variables_set"></block>' +
'    <block type="variables_local"></block>' +
'    <block type="variables_local_init"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category colour="80" id="catArrays" name="Array’s">' +
'    <block type="array_global"></block>' +
'    <block type="array_global_init"></block>' +
'    <block type="array_get"></block>' +
'    <block type="array_set"></block>' +
'    <block type="array_local"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category colour="290" id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
'  <sep></sep>' +
'  <category colour="250" id="catInputOutput" name="Input/Output">' +
'    <block type="io_pinname"></block>' +
'    <block type="io_highlow"></block>' +
'    <block type="io_digitalwrite">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalread"></block>' +
'    <block type="io_analogwrite"></block>' +
'    <block type="io_analogread"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category colour="140" id="catTime" name="Time">' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_delaymicros">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_millis"></block>' +
'    <block type="time_micros"></block>' +
'    <block type="infinite_loop"></block>' +
'  </category>' +
// '  <sep></sep>' +
// '  <category colour="250" id="catAudio" name="Audio">' +
// '    <block type="io_tone">' +
// '      <field name="TONEPIN">0</field>' +
// '      <value name="FREQUENCY">' +
// '        <shadow type="math_number">' +
// '          <field name="NUM">220</field>' +
// '        </shadow>' +
// '      </value>' +
// '    </block>' +
// '    <block type="io_notone"></block>' +
// '  </category>' +
// '  <sep></sep>' +
// '  <category colour="80" id="catMotors" name="Motors">' +
// '    <block type="servo_write">' +
// '      <value name="SERVO_ANGLE">' +
// '        <block type="math_number">' +
// '          <field name="NUM">90</field>' +
// '        </block>' +
// '      </value>' +
// '    </block>' +
// '    <block type="servo_read"></block>' +
// '    <block type="stepper_config">' +
// '      <field name="STEPPER_PIN1">1</field>' +
// '      <field name="STEPPER_PIN2">2</field>' +
// '      <value name="STEPPER_STEPS">' +
// '        <block type="math_number">' +
// '          <field name="NUM">100</field>' +
// '        </block>' +
// '      </value>' +
// '      <value name="STEPPER_SPEED">' +
// '        <block type="math_number">' +
// '          <field name="NUM">10</field>' +
// '        </block>' +
// '      </value>' +
// '    </block>' +
// '    <block type="stepper_step">' +
// '      <value name="STEPPER_STEPS">' +
// '        <block type="math_number">' +
// '          <field name="NUM">10</field>' +
// '        </block>' +
// '      </value>' +
// '    </block>' +
// '  </category>' +
'  <sep></sep>' +
'  <category colour="160" id="catComms" name="Comms">' +
'    <block type="serial_setup"></block>' +
'    <block type="serial_print"></block>' +
'    <block type="text_prompt_ext">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
// '    <block type="spi_setup"></block>' +
// '    <block type="spi_transfer"></block>' +
// '    <block type="spi_transfer_return"></block>' +
'  </category>' +
'</xml>';
