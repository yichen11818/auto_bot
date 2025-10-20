Blockly.Blocks['1718113628979'] = {
  init: function() {
    this.jsonInit({
      "type": "1718113628979",
      "message0": "右转plus",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718113628979'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(48,18,149,99,130,43,173,106,142,180,57,98,143,141,117,100,127,78,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(47,18,149,99,90,55,124,100,142,179,56,98,107,145,76,100,127,78,107)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1718113628979'] = function(block) {
  let code = "robot.leju_action('右转plus')\n";
  return code;
}

