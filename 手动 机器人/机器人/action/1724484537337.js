Blockly.Blocks['1724484537337'] = {
  init: function() {
    this.jsonInit({
      "type": "1724484537337",
      "message0": "右移备用",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724484537337'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(100)\nMOTOmove19(73,10,158,60,90,55,127,100,134,190,51,105,110,145,73,105,127,78,100)\nMOTOwait()\nMOTOrigid16(40,40,40,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(100)\nMOTOmove19(73,10,158,105,90,55,127,100,134,190,51,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1724484537337'] = function(block) {
  let code = "robot.leju_action('右移备用')\n";
  return code;
}

