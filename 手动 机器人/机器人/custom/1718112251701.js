Blockly.Blocks['1718112251701'] = {
  init: function() {
    this.jsonInit({
      "type": "1718112251701",
      "message0": "右移加速",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718112251701'] = function(block) {
  let code = "MOTOrigid16(49,18,149,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(100)\nMOTOmove19(49,18,149,58,89,55,126,94,142,180,58,103,108,143,72,110,127,78,100)\nMOTOwait()\nMOTOrigid16(49,18,149,70,70,70,70,70,40,40,40,70,70,70,70,70)\nMOTOsetspeed(100)\nMOTOmove19(49,18,149,105,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\nDelayMs(100)\n";
  return code;
}

Blockly.Python['1718112251701'] = function(block) {
  let code = "robot.leju_action('右移加速')\n";
  return code;
}

