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
          new Blockly.FieldNumber(
              '', 1,null,1),
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

Blockly.Blocks['array_global_init'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */

  init: function() {
     var sizeChangeHandler = (text, prevText) => {
       this.updateShape()
     }
     var nameField = new Blockly.FieldTextInput(
        "var-name",
        Blockly.Variables.globalRenameValidator);
    nameField.setSpellcheck(false);
    this.appendDummyInput()
        .appendField("global array")
        .appendField(nameField, "VARNAME")
        .appendField("size:")
        .appendField(
            new Blockly.FieldNumber(
                4, 1,null,1,sizeChangeHandler),
            'SIZE');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("element type:")
        .appendField(new Blockly.FieldDropdown(
                        Blockly.Types.getTypeMenuItems()),
                    'ELEMENTTYPE')
     this.setColour(Blockly.Blocks.arrays.HUE);
     this.setTooltip("Create a global array.");
     this.setInputsInline(true)
     this.updateShape();
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
  updateWarnings: function() {
  },
  getInitCode: function() {
    var initItems = [];
    for (var i = 0; i < this.itemCount(); i++) {
      var itm = Blockly.Arduino.valueToCode(this, 'ELEMENT' + i, Blockly.Arduino.ORDER_ASSIGNMENT)
      if(!itm) {
        var type = Blockly.Types[this.getFieldValue('ELEMENTTYPE')]
        itm = type.defaultValue
      }
      initItems.push(itm)
    }
    return "{"+initItems.join(", ")+"}"
  },
  itemCount: function() {
    return this.getFieldValue('SIZE')
  },
  updateShape: function() {
    // Add new inputs.
    for (var i = 0; i < this.itemCount(); i++) {
      if (!this.getInput('ELEMENT' + i)) {
        var input = this.appendValueInput('ELEMENT' + i);
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ELEMENT' + i)) { //var otherConnection = this.targetConnection;
      var conn = this.getInput('ELEMENT' + i).connection;
      if(conn.targetConnection) {
        conn.disconnect();  // TODO: do we do this here??
      }
      this.removeInput('ELEMENT' + i);
      i++;
    }
  },
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
          new Blockly.FieldNumber(
              '', 1,null,1),
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

Blockly.Blocks['array_local_init'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */

  init: function() {
     var sizeChangeHandler = (text, prevText) => {
       this.updateShape()
     }
     var nameField = new Blockly.FieldTextInput(
        "var-name",
        Blockly.Variables.globalRenameValidator);
    nameField.setSpellcheck(false);
    this.appendDummyInput()
        .appendField("local array")
        .appendField(nameField, "VARNAME")
        .appendField("size:")
        .appendField(
            new Blockly.FieldNumber(
                4, 1,null,1,sizeChangeHandler),
            'SIZE');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("element type:")
        .appendField(new Blockly.FieldDropdown(
                        Blockly.Types.getTypeMenuItems()),
                    'ELEMENTTYPE')
     this.setColour(Blockly.Blocks.arrays.HUE);
     this.setTooltip("Create a local array.");
     this.setInputsInline(true)
     this.updateShape();
//    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
  },
  getVarInfo: Blockly.Blocks['array_global_init'].getVarInfo,
  // contextMenuType_: 'variables_get',
  // customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
  updateWarnings: function() {
  },
  getInitCode: Blockly.Blocks['array_global_init'].getInitCode,
  itemCount: Blockly.Blocks['array_global_init'].itemCount,
  updateShape: Blockly.Blocks['array_global_init'].updateShape,
};

Blockly.Blocks['array_get'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.arrays.HUE);
    this.appendValueInput('INDEX')
        .appendField("from array")
        .appendField(new Blockly.FieldVariable("",'array'), 'ARRAY')
        .appendField("get item")
    this.setOutput(true);
    this.setInputsInline(true);

  },
  getBlockType: function() {
    return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
  },
  getVarType: function(varName) {
    return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
  },
};
Blockly.Blocks['array_set'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.arrays.HUE);
    this.appendValueInput('INDEX')
        .appendField("in array")
        .appendField(new Blockly.FieldVariable("",'array'), 'ARRAY')
        .appendField("set item");
    this.appendValueInput('VALUE')
        .appendField("to:");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
  getBlockType: function() {
    return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
  },
  getVarType: function(varName) {
    return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
  },
};
