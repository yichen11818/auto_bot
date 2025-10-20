Blockly.Blocks['1692961899531'] = {
  init: function() {
    this.jsonInit({
      "type": "1692961899531",
      "message0": "抱箱子左转1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692961899531'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,53,48,90,100,140,180,50,100,75,146,43,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692961899531'] = function(block) {
  let code = "robot.leju_action('抱箱子左转1_1')\n";
  return code;
}

