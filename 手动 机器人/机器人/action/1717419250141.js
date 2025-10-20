Blockly.Blocks['1717419250141'] = {
  init: function() {
    this.jsonInit({
      "type": "1717419250141",
      "message0": "抱箱子左移1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717419250141'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(53,23,150,100,90,55,127,93,142,180,58,135,110,145,73,100,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(53,23,150,100,90,55,127,100,142,180,58,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(260)\n";
  return code;
}

Blockly.Python['1717419250141'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1')\n";
  return code;
}

