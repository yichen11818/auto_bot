Blockly.Blocks['1717677741476'] = {
  init: function() {
    this.jsonInit({
      "type": "1717677741476",
      "message0": "抱箱右移2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717677741476'] = function(block) {
  let code = "MOTOrigid16(49,18,149,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(60)\nMOTOmove19(49,18,149,65,90,55,127,96,142,180,58,105,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(80)\nMOTOmove19(49,18,149,105,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1717677741476'] = function(block) {
  let code = "robot.leju_action('抱箱右移2')\n";
  return code;
}

