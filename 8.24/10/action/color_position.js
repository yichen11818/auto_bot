Blockly.Blocks['color_position'] = {
  init: function () {
    this.jsonInit({
      type: 'color_position',
      message0: '%1 %{BKY_CAMERA} %2 %{BKY_READ} %3 %{BKY_COLOR_POSITION_TITLE} %4',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'input_dummy' },
        { type: 'field_dropdown', name: 'color', options: colorOptions() },
        { type: 'field_dropdown', name: 'rect', options: rectOptions() },
      ],
      output: 'Number',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_position'] = undefined

Blockly.Python['color_position'] = function (block) {
  const camera = block.getFieldValue('camera');
  const color = block.getFieldValue('color');
  const rect = block.getFieldValue('rect');
  const code = generateHsvCode(GET_FRAME, camera, hsvMap[color], rect);
  return [code, Blockly.Python.ORDER_NONE];
}

