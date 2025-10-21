Blockly.Blocks['color_identification_rgbhsv'] = {
  init: function () {
    this.jsonInit({
      type: 'color_identification_rgbhsv',
      message0: '%{BKY_VISUAL_COLOR_RGBHSV_TITLE_1}',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'field_colour', name: 'colour', colour: '#ff0000' },
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
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_identification_rgbhsv'] = undefined

Blockly.Python['color_identification_rgbhsv'] = function (block) {
  const camera = block.getFieldValue('camera');
  const colour = block.getFieldValue('colour');
  const { hmin, hmax, smin, smax, vmin, vmax } = getHsvRangeParams(block);
  return `# HSVMarker('${camera}', '${colour}', {${hmin}, ${hmax}, ${smin}, ${smax}, ${vmin}, ${vmax}})\n`;
}

