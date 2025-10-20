Blockly.Blocks['1717677558655'] = {
  init: function() {
    this.jsonInit({
      "type": "1717677558655",
      "message0": "抱箱右转2",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1717677558655'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(25)\nMOTOmove19(49,18,149,100,122,44,165,100,142,180,58,100,141,143,109,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(49,18,149,100,90,55,127,100,142,180,58,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1717677558655'] = function(block) {
  let code = "robot.leju_action('抱箱右转2')\n";
  return code;
}

