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
    // this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(
        "",'basic'), 'VAR');
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
    console.log("XML:", xmlBlock);
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
    this.appendValueInput('VALUE')
        .appendField("set")
        .appendField(new Blockly.FieldVariable("",'basic'), 'VAR')
        .appendField("to");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(Blockly.Blocks.variables.HUE);
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
        "var-name",
        Blockly.Variables.globalRenameValidator);
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
   getVarInfo: function() {
    return { name: this.getFieldValue('VARNAME'),
             type: Blockly.Types[this.getFieldValue('VARTYPE')]
           };
  },
  validate: function () {
    var name = Blockly.Variables.findLegalName(
        this.getFieldValue('VARNAME'), this);
    this.setFieldValue(name, 'VARNAME');
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
        "var-name",
        Blockly.Variables.globalRenameValidator);
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
  getVarInfo:    Blockly.Blocks['variables_global'].getVarInfo,
  validate:      Blockly.Blocks['variables_global'].validate,
  updateWarnings() {
    //TODO: check if type matches value.
     if(Blockly.Types.getChildBlockType(this)==Blockly.Types.CHILD_BLOCK_MISSING) {
        this.setWarningText("There is no initial value.","CHILD_MISSING");
     } else {
        this.setWarningText(null,"CHILD_MISSING");
     }
  },
  customContextMenu: function(options) {
    var option = {enabled: true};
    var vname = this.getFieldValue('VARNAME');
    option.text = 'create "get '+vname+'"';
    var xmlField = goog.dom.createDom('field', null, vname);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', 'variables_get');
    console.log("XML:", xmlBlock);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
    var option = {enabled: true};
    option.text = 'create "set '+vname+'"';
    var xmlField = goog.dom.createDom('field', null, vname);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', 'variables_set');
    console.log("XML2:", xmlBlock);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};
Blockly.Blocks['variables_local'] = {
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
         .appendField("local variable")
         .appendField(nameField, "VARNAME")
         .appendField("has type")
         .appendField(new Blockly.FieldDropdown(
                          Blockly.Types.getTypeMenuItems()),
                      'VARTYPE')

     this.setColour(Blockly.Blocks.variables.HUE);
     this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
     //this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
     this.setPreviousStatement(true);
     this.setNextStatement(true);
  },
  getVarInfo:    Blockly.Blocks['variables_global'].getVarInfo,
//  contextMenuType_: 'variables_get',
//  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
};
Blockly.Blocks['variables_local_init'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */

  init: function() {
     var nameField = new Blockly.FieldTextInput(
        "var-name",
        Blockly.Variables.localRenameValidator);
     nameField.setSpellcheck(false);

     this.appendValueInput('VALUE')
         .appendField("local variable")
         .appendField(nameField, "VARNAME")
         .appendField("has type")
         .appendField(new Blockly.FieldDropdown(
                          Blockly.Types.getTypeMenuItems()),
                      'VARTYPE')
         .appendField("value")

     this.setColour(Blockly.Blocks.variables.HUE);
     this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
     //this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
     this.setPreviousStatement(true);
     this.setNextStatement(true);
  },
  getVarInfo:         Blockly.Blocks['variables_local'].getVarInfo,
  customContextMenu:  Blockly.Blocks['variables_global_init'].customContextMenu,
//  contextMenuType_: 'variables_get',
//  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
  // /**
  //  * Searches through the nested blocks to find a variable type.
  //  * @this Blockly.Block
  //  * @param {!string} varName Name of this block variable to check type.
  //  * @return {string} String to indicate the type of this block.
  //  */
  // getVarType: function(varName) {
  //   return Blockly.Types.getChildBlockType(this);
  // }
};
