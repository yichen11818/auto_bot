Blockly.Blocks['aelos_for'] = {
  init: function() {
    this.jsonInit({
      "type": "aelos_for",
      "message0": "%{BKY_AELOS_LOOP} %1 %{BKY_AELOS_LOOP_TIMES} %2 %{BKY_AELOS_DO} %3",
      "args0": [
        {
          "type": "input_value",
          "name": "times",
          "check": ["Number", "Variable"]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "do"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#86C113',
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['aelos_for'] = function(block) {
  var times = Blockly.Lua.valueToCode(block, "times", Blockly.Lua.ORDER_NONE) || "0";
  var do_code = Blockly.Lua.statementToCode(block, "do");

  var code = `for i = 1,${times},1\ndo\n${do_code}\nHKEY()\nend\n`;

  return code;
}

Blockly.Python['aelos_for'] = function(block) {
  var times = Blockly.Python.valueToCode(block, "times", Blockly.Python.ORDER_NONE) || "0";
  var do_code = Blockly.Python.statementToCode(block, "do") || Blockly.Python.PASS;

  var code = `for i in range(${times}):\n${do_code}`;

  return code;
}

