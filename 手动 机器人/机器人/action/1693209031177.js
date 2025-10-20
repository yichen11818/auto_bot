Blockly.Blocks['1693209031177'] = {
  init: function() {
    this.jsonInit({
      "type": "1693209031177",
      "message0": "抱箱子左移1-7",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693209031177'] = function(block) {
  let code = "MOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,100,90,55,127,95,140,180,50,135,110,145,73,104,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,95,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1693209031177'] = function(block) {
  let code = "robot.leju_action('抱箱子左移1-7')\n";
  return code;
}

