Blockly.Blocks['color_rgbhsv_position'] = {
  init: function () {
    this.jsonInit({
      type: 'color_rgbhsv_position',
      message0:
        '%1 %{BKY_CAMERA} %2 %{BKY_COLOR_RGBHSV_POSITION_TITLE_1} %3 %4 %{BKY_COLOR_RGBHSV_POSITION_TITLE_2} %5 Hmin: %6 ~Hmax: %7 %8 Smin :  %9 ~Smax :  %10 %11 Vmin : %12 ~Vmax: %13',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'input_dummy' },
        { type: 'field_dropdown', name: 'rect', options: rectOptions() },
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
      output: 'Number',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_rgbhsv_position'] = undefined

Blockly.Python['color_rgbhsv_position'] = function (block) {
  const camera = block.getFieldValue('camera');
  const rect = block.getFieldValue('rect');
  const hmin = block.getFieldValue('hmin');
  const hmax = block.getFieldValue('hmax');
  const smin = block.getFieldValue('smin');
  const smax = block.getFieldValue('smax');
  const vmin = block.getFieldValue('vmin');
  const vmax = block.getFieldValue('vmax');
  const code = generateHsvCode(GET_FRAME, camera, { hmin, hmax, smin, smax, vmin, vmax }, rect);
  return [code, Blockly.Python.ORDER_NONE];
}

