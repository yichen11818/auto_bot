Blockly.Blocks['color_rgbhsv_discrimiation'] = {
  init: function () {
    this.jsonInit({
      type: 'color_rgbhsv_discrimiation',
      message0:
        '%1 %{BKY_CAMERA} %{BKY_VISUAL_COLOR_RGBHSV_DISCRI_TITLE_1} %2 %{BKY_VISUAL_COLOR_RGBHSV_DISCRI_TITLE_2} %3 Hmin: %4 ~Hmax: %5 %6 Smin :  %7 ~Smax :  %8 %9 Vmin : %10 ~Vmax: %11',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
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

Blockly.Lua['color_rgbhsv_discrimiation'] = undefined

Blockly.Python['color_rgbhsv_discrimiation'] = function (block) {
  const camera = block.getFieldValue('camera');
  const hmin = block.getFieldValue('hmin');
  const hmax = block.getFieldValue('hmax');
  const smin = block.getFieldValue('smin');
  const smax = block.getFieldValue('smax');
  const vmin = block.getFieldValue('vmin');
  const vmax = block.getFieldValue('vmax');
  const code = generateHsvCode(HAVE_COLOR, camera, { hmin, hmax, smin, smax, vmin, vmax });
  return [code, Blockly.Python.ORDER_NONE];
}

