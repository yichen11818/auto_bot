Blockly.Blocks['1718112218649'] = {
  init: function() {
    this.jsonInit({
      "type": "1718112218649",
      "message0": "左移加速",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718112218649'] = function(block) {
  let code = "MOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(100)\nMOTOmove19(49,18,149,104,94,55,122,92,142,180,58,146,106,143,77,109,128,71,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(100)\nMOTOmove19(49,18,149,100,93,55,124,100,142,180,58,100,107,145,76,100,128,71,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1718112218649'] = function(block) {
  let code = "robot.leju_action('左移加速')\n";
  return code;
}

