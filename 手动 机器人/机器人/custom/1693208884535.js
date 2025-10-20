Blockly.Blocks['1693208884535'] = {
  init: function() {
    this.jsonInit({
      "type": "1693208884535",
      "message0": "抱箱子右移1_9",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1693208884535'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(65,15,149,65,90,55,127,96,140,180,50,105,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(65,15,149,105,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(150)\n";
  return code;
}

Blockly.Python['1693208884535'] = function(block) {
  let code = "robot.leju_action('抱箱子右移1_9')\n";
  return code;
}

