Blockly.Blocks['1692961939546'] = {
  init: function() {
    this.jsonInit({
      "type": "1692961939546",
      "message0": "抱箱子右转1_1",
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1692961939546'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,122,44,165,100,140,180,50,100,141,143,109,100,127,78,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(65,15,149,100,90,55,127,100,140,180,50,100,110,145,73,100,127,78,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1692961939546'] = function(block) {
  let code = "robot.leju_action('抱箱子右转1_1')\n";
  return code;
}

