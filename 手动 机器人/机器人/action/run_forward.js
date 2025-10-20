Blockly.Blocks['run_forward'] = {
  init: function() {
    this.jsonInit({
      type: 'run_forward',
      message0: '%{BKY_RUN} %1 %{BKY_ISPEED}，%2 %{BKY_STEP}',
      args0: [
        {
          type: 'field_dropdown',
          name: 'direction',
          options: [
            ['%{BKY_FORWARD}', 'forward'],
            ['%{BKY_BACKWARD}', 'backward'],
          ],
        },
        {
          "type": "input_value",
          "name": "step",
          "check": [
            "Number",
            "Variable"
          ]
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: '#48BCBC',
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['run_forward'] = function(block) {
  const direction = block.getFieldValue('direction');
  var step = Blockly.Lua.valueToCode(block, "step", Blockly.Lua.ORDER_NONE);

  let code = '';

  code =
    direction !== 'backward'
      ? `fast_forward_step(${step})`
      : `fast_backward_step(${step})`;

  return code.concat('\n');
}

Blockly.Python['run_forward'] = function(block) {
  return generateGoStraightCode({ block, speedStatus: SPEED_STATUS.fast });
}

