Blockly.Blocks['face_combination'] = {
  init: function () {
    this.jsonInit({
      type: 'face_combination',
      lastDummyAlign0: 'RIGHT',
      message0: '%{BKY_VISUAL_FACE_COMBINATION_TITLE} ',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        faceTimeOptions,
        { type: 'field_dropdown', name: 'sex', options: faceSexOptions(true) },
        { type: 'field_dropdown', name: 'ages', options: faceAgeOptions(true) },
        { type: 'field_dropdown', name: 'emotion', options: faceEmotionOptions(true) },
      ],
      output: 'Boolean',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['face_combination'] = undefined

Blockly.Python['face_combination'] = function (block) {
  const camera = block.getFieldValue('camera');
  const time = block.getFieldValue('time');
  const sex = block.getFieldValue('sex');
  const ages = block.getFieldValue('ages');
  const emotion = block.getFieldValue('emotion');
  const code = `face_detect.face_all_detect(${time}, ${sex}, ${ages}, ${emotion}, '${camera}')`;
  return [code, Blockly.Python.ORDER_NONE];
}

