Blockly.Blocks['1718113842216'] = {
  init: function() {
    this.jsonInit({
      "type": "1718113842216",
      "message0": "右转测试",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1718113842216'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(40)\nMOTOmove19(48,18,149,99,130,43,173,106,142,180,57,98,143,141,117,100,127,78,101)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(47,18,149,99,90,55,124,100,142,179,56,98,107,145,76,100,127,78,107)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1718113842216'] = function(block) {
  let code = "robot.leju_action('右转测试')\n";
  return code;
}

