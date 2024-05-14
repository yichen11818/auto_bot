Blockly.Blocks['run_smooth_forward'] = {
  init: function() {
    this.jsonInit({
      type: 'run_smooth_forward',
      message0: '%{BKY_RUN_SMOOTH} %1 %{BKY_ISPEED_SMOOTH}，%2 %{BKY_STEP}',
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

Blockly.Lua['run_smooth_forward'] = function(block) {
  const direction = block.getFieldValue('direction');
  var step = Blockly.Lua.valueToCode(block, "step", Blockly.Lua.ORDER_NONE);

  let code = '';

  code =
    direction !== 'backward'
      ? `fast_forward_smooth_step(${step})`
      : `fast_backward_smooth_step(${step})`;

  return code.concat('\n');
}

Blockly.Python['run_smooth_forward'] = function(block) {
  return generateGoStraightCode({ block, speedStatus: SPEED_STATUS.fast, smooth: true });
}

