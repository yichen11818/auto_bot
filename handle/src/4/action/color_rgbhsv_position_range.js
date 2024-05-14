Blockly.Blocks['color_rgbhsv_position_range'] = {
  init: function () {
    this.jsonInit({
      type: 'color_rgbhsv_position_range',
      message0:
        '%1 %{BKY_CAMERA} %{BKY_VISUAL_RGBHSV_POSITION_RANGE_TITLE_1} %2 %3 %{BKY_VISUAL_RGBHSV_POSITION_RANGE_TITLE_2} %4 Hmin: %5 ~Hmax: %6 %7 Smin :  %8 ~Smax :  %9 %10 Vmin : %11 ~Vmax: %12',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'field_dropdown', name: 'position', options: colorPositionOptions() },
        { type: 'input_dummy' },
        { type: 'input_dummy' },
        hsvArgs.hmin,
        hsvArgs.hmax,
        { type: 'input_dummy' },
        hsvArgs.smin,
        hsvArgs.smax,
        { type: 'input_dummy' },
        hsvArgs.vmin,
        hsvArgs.vmax,
      ],
      output: 'Boolean',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_rgbhsv_position_range'] = undefined

Blockly.Python['color_rgbhsv_position_range'] = function (block) {
  const camera = block.getFieldValue('camera');
  const hsvString = getHsvRangeParams(block, true);
  const position = block.getFieldValue('position');
  const code = `colour_port.get_hsv_position('${camera}', '${position}', ${hsvString})`;
  return [code, Blockly.Python.ORDER_NONE];
}

