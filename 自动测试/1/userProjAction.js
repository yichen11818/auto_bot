Blockly.Blocks['sensor'] = {
  init: function () {
    this.jsonInit({
      type: 'sensor',
      message0: '%{BKY_SENSOR} %1 %{BKY_SENSOR_PORT} %2 %{BKY_SENSOR_VAR} %3',
      args0: [
        {
          type: 'input_dummy',
        },
        {
          type: 'field_dropdown',
          name: 'port',
          options: portOptions,
        },
        {
          type: 'input_value',
          name: 'variable',
          check: 'Variable',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['sensor'] = undefined

Blockly.Python['sensor'] = function (block) {
  var port = block.getFieldValue('port');
  var variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_NONE);
  var code = '';
  if (variable) {
    code = `${variable} = sensor_port.get_gpio(${port})\n`;
  } else {
    code = `sensor_port.get_gpio(${port})\n`;
  }

  return code;
}

Blockly.Blocks['aelos_if'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_if',
      message0: '%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_if'] = function(block) {
  var condition = Blockly.Lua.valueToCode(block, "condition", Blockly.Lua.ORDER_NONE) || "false";
  var do_code = Blockly.Lua.statementToCode(block, "do");

  var code = `if ${condition} then \n${do_code}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_if'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  const code = `if ${condition}:\n${do_code}`;
  return code;
}

