Blockly.Blocks['read_label_id'] = {
  init: function () {
    this.jsonInit({
      type: 'read_label_id',
      message0: '%1 %{BKY_CAMERA}%{BKY_READ_LABEL_ID}',
      args0: [{ type: 'field_dropdown', name: 'camera', options: cameraOptions() }],
      output: 'Number',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['read_label_id'] = undefined

Blockly.Python['read_label_id'] = function (block) {
  const camera = block.getFieldValue('camera');
  const code = `${TAG_ID}('${camera}')`;
  return [code, Blockly.Python.ORDER_NONE];
}

