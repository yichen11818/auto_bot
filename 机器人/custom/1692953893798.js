Blockly.Blocks['1692953893798'] = {
  init: function() {
    this.jsonInit({
      "type": "1692953893798",
      "message0": "推左转弯1_4",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692953893798'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(50)\nMOTOmove19(73,85,143,98,99,73,124,99,120,100,44,115,91,107,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(73,85,143,98,99,73,124,99,120,125,28,114,94,126,75,99,128,71,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,76,143,98,99,73,124,99,121,127,60,99,100,126,76,99,128,71,99)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692953893798'] = function(block) {
  let code = "robot.leju_action('推左转弯1_4')\n";
  return code;
}

