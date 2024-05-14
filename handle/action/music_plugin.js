Blockly.Blocks['music_plugin'] = {
  init: function() {
    this.jsonInit({
      "type": "music_plugin",
      "message0": "%{BKY_AELOS_MUSIC} %1",
      "args0": [{
        "type": "field_input",
        "name": "music_name",
        "text": "%{BKY_DEFAULT_MUSIC_INPUT}",
        "spellcheck": false
      }],
      "inputsInline": true,
      "output": "Music",
      "colour": '#F144B2',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['music_plugin'] = function(block) {
  const music_name = block.getFieldValue("music_name");
  let code = `Play_AI_music('')\n`;

  if (music_name) {
    code = `Play_AI_music('0:/music/${music_name}.mp3')\n`;
  }

  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['music_plugin'] = function (block) {
  let musicName = block.getFieldValue('music_name');
  const isInputted = Boolean(musicName) && musicName !== Blockly.Msg['DEFAULT_MUSIC_INPUT'];
  const code = !isInputted ? 'None' : `'${musicName}'`;
  return [code, Blockly.Python.ORDER_NONE];
}

