/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Variable blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.variables');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.variables.HUE = 330;

Blockly.Blocks['variables_get'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(
        Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
  },
  contextMenuType_: 'variables_set',
  /**
   * Add menu option to create getter/setter block for this setter/getter.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  },
  /**
   * @return {!string} Retrieves the type (stored in varType) of this block.
   * @this Blockly.Block
   */
  getBlockType: function() {
    return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
  },
  /**
   * Gets the stored type of the variable indicated in the argument. As only one
   * variable is stored in this block, no need to check input
   * @this Blockly.
   * @param {!string} varName Name of this block variable to check type.
   * @return {!string} String to indicate the type of this block.
   */
  getVarType: function(varName) {
    return [Blockly.Types.UNDEF, this.getFieldValue('VAR')];
  },
};

Blockly.Blocks['variables_set'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.VARIABLES_SET,
      "args0": [
        {
          "type": "field_variable",
          "name": "VAR",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.variables.HUE,
      "tooltip": Blockly.Msg.VARIABLES_SET_TOOLTIP,
      "helpUrl": Blockly.Msg.VARIABLES_SET_HELPURL
    });
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
  },
  contextMenuType_: 'variables_get',
  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
  /**
   * Searches through the nested blocks to find a variable type.
   * @this Blockly.Block
   * @param {!string} varName Name of this block variable to check type.
   * @return {string} String to indicate the type of this block.
   */
  getVarType: function(varName) {
    return Blockly.Types.getChildBlockType(this);
  }
};
Blockly.Blocks['variables_global'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */

  init: function() {
     var nameField = new Blockly.FieldTextInput(
        "name",
        Blockly.Variables.rename);
     nameField.setSpellcheck(false);
     this.appendDummyInput()
         .appendField("global variable")
         .appendField(nameField, "VARNAME")
         .appendField("has type")
         .appendField(new Blockly.FieldDropdown(
                          Blockly.Types.getTypeMenuItems()),
                      'VARTYPE');
     this.setColour(Blockly.Blocks.variables.HUE);
     this.setTooltip("Create a global variable.");
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
  },
  canBeRoot: true,
  // contextMenuType_: 'variables_get',
  // customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
  /**
   * Searches through the nested blocks to find a variable type.
   * @this Blockly.Block
   * @param {!string} varName Name of this block variable to check type.
   * @return {string} String to indicate the type of this block.
   */
  getVarType: function(varName) {
    //TODO: who calls this? //return Blockly.Types.getChildBlockType(this);
    throw "FUNCTION NOT IMPLEMENTED";
  },
  // add number to name if name is duplicate
  afterCreation: function() {
     var globalVars = Blockly.Variables.allGlobalVariables(this.workspace);
     var myName = this.getFieldValue('VARNAME');
     var match = /(.*)-(\d+)$/.exec(myName);
     if(match) {
        myName = match[1];
        count = parseInt(match[2]);
     } else {
        var count = 0;
     }
     var self = this;
     function anyGlobalWithSameName(name) {
        for (var idx = 0; idx < globalVars.length; idx++) {
           var v = globalVars[idx];
           if( v.block == self ) {
              continue;
           }
           if( v.name == name ){
             return true;
           }
        }
        return false;
     }

     while (anyGlobalWithSameName(count ? myName + "-" + count : myName)) {
        count ++
     }
     if(count) {
        this.setFieldValue(myName + "-" + count,'VARNAME')
     }
  },
  updateWarnings() {
  }
};
Blockly.Blocks['variables_global_init'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */

  init: function() {
     var nameField = new Blockly.FieldTextInput(
        "name",
        Blockly.Variables.rename);
     nameField.setSpellcheck(false);
     this.appendValueInput('VALUE')
         .appendField("global variable")
         .appendField(nameField, "VARNAME")
         .appendField("has type")
         .appendField(new Blockly.FieldDropdown(
                          Blockly.Types.getTypeMenuItems()),
                      'VARTYPE')
         .appendField("value")
    this.setColour(Blockly.Blocks.variables.HUE);
    this.setTooltip("Create a global variable and set its initial value.");
//    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
  },
  canBeRoot: true,
  // contextMenuType_: 'variables_get',
  // customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
  /**
   * Searches through the nested blocks to find a variable type.
   * @this Blockly.Block
   * @param {!string} varName Name of this block variable to check type.
   * @return {string} String to indicate the type of this block.
   */
  getVarType:    Blockly.Blocks['variables_global'].getVarType,
  afterCreation: Blockly.Blocks['variables_global'].afterCreation, // add number to name if name is duplicate
  updateWarnings() {
    //TODO: check if type matches value.
     if(Blockly.Types.getChildBlockType(this)==Blockly.Types.CHILD_BLOCK_MISSING) {
        this.setWarningText("There is no initial value.","CHILD_MISSING");
     } else {
        this.setWarningText(null,"CHILD_MISSING");
     }
  }
};
Blockly.Blocks['variables_init_local'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */

  init: function() {
     var nameField = new Blockly.FieldTextInput(
        "name",
        Blockly.Variables.rename);
     nameField.setSpellcheck(false);
     this.appendValueInput('VALUE')
         .appendField("initialize local")
         .appendField(nameField)
         .appendField("to")
     this.setColour(Blockly.Blocks.variables.HUE);
     this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
     this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
     this.setPreviousStatement(true);
     this.setNextStatement(true);
     this.warnings = [];
  },
  contextMenuType_: 'variables_get',
  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
  /**
   * Searches through the nested blocks to find a variable type.
   * @this Blockly.Block
   * @param {!string} varName Name of this block variable to check type.
   * @return {string} String to indicate the type of this block.
   */
  getVarType: function(varName) {
    return Blockly.Types.getChildBlockType(this);
  }
};
