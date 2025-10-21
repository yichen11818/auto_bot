Blockly.Blocks['music'] = {
  init: function() {
    this.jsonInit({
      "type": "music",
      "message0": "%{BKY_AELOS_MUSIC} %1",
      "args0": [{
        "type": "field_input",
        "name": "music_name",
        "text": "%{BKY_DEFAULT_MUSIC_INPUT}",
        "spellcheck": false
      }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#F144B2',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['music'] = function(block) {
  const music_name = block.getFieldValue("music_name");
  let code = `Play_AI_music('')\n`;
    
  if (music_name) {
    code = `Play_AI_music('0:/music/${music_name}.mp3')\n`;
  }

  return code;
}

Blockly.Python['music'] = function (block) {
  let musicName = block.getFieldValue('music_name');
  const isInputted = Boolean(musicName) && musicName !== Blockly.Msg['DEFAULT_MUSIC_INPUT'];
  musicName = !isInputted ? 'None' : `'${musicName}'`;
  const code = `robot.play_music(${musicName})\n`;
  return code;
}

