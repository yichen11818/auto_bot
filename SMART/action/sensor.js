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

Blockly.Lua['sensor'] = function(block){
  const variable = Blockly.Lua.valueToCode(block, "variable", Blockly.JavaScript.ORDER_NONE);
  const port = block.getFieldValue("port");
  return `${variable} = ReadGpio(${port})\n`;
}

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

