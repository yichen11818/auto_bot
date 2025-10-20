Blockly.Blocks['move_forward'] = {
  init: function() {
    this.jsonInit({
      type: 'move_forward',
      message0: '%{BKY_MOVE} %1 %{BKY_ISLOW_WALK}，%2 %{BKY_STEP}',
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

Blockly.Lua['move_forward'] = function(block) {
  const direction = block.getFieldValue('direction');
  var step = Blockly.Lua.valueToCode(block, "step", Blockly.Lua.ORDER_NONE);
  let code = '';

  code =
    direction !== 'backward'
      ? `slow_forward_step(${step})`
      : `slow_backward_step(${step})`;

  return code.concat('\n');
}

Blockly.Python['move_forward'] = function(block) {
  return generateGoStraightCode({ block, speedStatus: SPEED_STATUS.slow });
}

