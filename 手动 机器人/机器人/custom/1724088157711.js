Blockly.Blocks['1724088157711'] = {
  init: function() {
    this.jsonInit({
      "type": "1724088157711",
      "message0": "右转备用",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1724088157711'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(20)\nMOTOmove19(73,10,158,99,130,43,173,106,134,190,51,98,144,140,118,107,127,78,101)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(73,10,158,99,90,55,124,100,134,190,51,98,107,145,76,100,127,78,107)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1724088157711'] = function(block) {
  let code = "robot.leju_action('右转备用')\n";
  return code;
}

