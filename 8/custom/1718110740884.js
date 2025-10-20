Blockly.Blocks['1718110740884'] = {
  init: function() {
    this.jsonInit({
      "type": "1718110740884",
      "message0": "move_left1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718110740884'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,104,94,55,122,92,142,180,58,146,106,143,77,109,0,0,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,100,93,55,124,100,142,180,58,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718110740884'] = function(block) {
  let code = "base_action.action('move_left1')\n";
  return code;
}

