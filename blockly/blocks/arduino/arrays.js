'use strict';

goog.provide('Blockly.Blocks.arrays');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks.arrays.HUE = 80;

Blockly.Blocks['array_global'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */

  init: function() {
     var nameField = new Blockly.FieldTextInput(
        "var-name",
        Blockly.Variables.globalRenameValidator);
    nameField.setSpellcheck(false);
    this.appendDummyInput()
        .appendField("global array")
        .appendField(nameField, "VARNAME")
        .appendField("size:")
        .appendField(
            new Blockly.FieldTextInput(
                '', Blockly.FieldTextInput.numberValidator),
            'SIZE');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("element type:")
        .appendField(new Blockly.FieldDropdown(
                        Blockly.Types.getTypeMenuItems()),
                    'ELEMENTTYPE')
     this.setColour(Blockly.Blocks.arrays.HUE);
     this.setTooltip("Create a global array.");
     this.setFieldValue(10000,"SIZE");
//    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
  },
  canBeRoot: true,
  getVarInfo: function() {
    return { name: this.getFieldValue('VARNAME'),
             type: Blockly.Types.makeArrayType(Blockly.Types[this.getFieldValue('ELEMENTTYPE')],this.getFieldValue('SIZE'))
           };
  },
  // contextMenuType_: 'variables_get',
  // customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
  updateWarnings() {
  }
};
Blockly.Blocks['array_local'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */

  init: function() {
     var nameField = new Blockly.FieldTextInput(
        "var-name",
        Blockly.Variables.localRenameValidator);
    nameField.setSpellcheck(false);
    this.appendDummyInput()
        .appendField("local array")
        .appendField(nameField, "VARNAME")
        .appendField("size:")
        .appendField(
            new Blockly.FieldTextInput(
                '', Blockly.FieldTextInput.numberValidator),
            'SIZE');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("element type:")
        .appendField(new Blockly.FieldDropdown(
                        Blockly.Types.getTypeMenuItems()),
                    'ELEMENTTYPE')
     this.setColour(Blockly.Blocks.arrays.HUE);
     this.setTooltip("Create a local array.");
     this.setFieldValue(10000,"SIZE");
//    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
  getVarInfo: Blockly.Blocks['array_global'].getVarInfo,
  // contextMenuType_: 'variables_get',
  // customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
  updateWarnings() {
  }
};
